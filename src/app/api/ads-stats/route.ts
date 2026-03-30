import { NextResponse } from "next/server";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const ADS_API_URL = `https://googleads.googleapis.com/v19/customers/${process.env.CUSTOMER_ID}/googleAds:searchStream`;

async function getAccessToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
      refresh_token: process.env.REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });
  const data = await res.json();
  if (!data.access_token) {
    console.error("Token error response:", JSON.stringify(data));
    throw new Error("Failed to get access token");
  }
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const query = `
      SELECT
        metrics.clicks,
        metrics.impressions,
        metrics.average_cpc,
        metrics.cost_micros,
        metrics.conversions
      FROM campaign
      WHERE segments.date DURING LAST_30_DAYS
    `;

    const res = await fetch(ADS_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": process.env.GOOGLE_ADS_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // cache 1 hour
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Google Ads API error:", err);
      return NextResponse.json({ error: "API error" }, { status: 500 });
    }

    const streams = await res.json();

    let totalClicks = 0;
    let totalImpressions = 0;
    let totalCostMicros = 0;
    let totalConversions = 0;

    for (const stream of streams) {
      for (const result of stream.results ?? []) {
        const m = result.metrics;
        totalClicks += Number(m.clicks ?? 0);
        totalImpressions += Number(m.impressions ?? 0);
        totalCostMicros += Number(m.costMicros ?? 0);
        totalConversions += Number(m.conversions ?? 0);
      }
    }

    const totalCostRupees = totalCostMicros / 1_000_000;
    const avgCpc = totalClicks > 0 ? totalCostRupees / totalClicks : 0;

    function fmt(n: number): string {
      if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(1)}L`;
      if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
      return String(Math.round(n));
    }

    return NextResponse.json({
      clicks: fmt(totalClicks),
      impressions: fmt(totalImpressions),
      avgCpc: `₹${Math.round(avgCpc)}`,
      cost: `₹${fmt(totalCostRupees)}`,
      conversions: fmt(totalConversions),
    });
  } catch (err) {
    console.error("ads-stats error:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
