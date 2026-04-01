import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const recipient = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL ?? "junaidkazi66@gmail.com";

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: recipient,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
