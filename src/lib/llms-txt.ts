import { blogPosts } from "@/data/blog";
import {
  caseStudies,
  homepageCopy,
  processSteps,
  profiles,
  siteConfig,
  teamMembers,
} from "@/data/siteData";

export function generateLlmsTxt(): string {
  const { siteUrl, description, email, phone, location } = siteConfig;
  const teamLines = teamMembers
    .map((member) => `- **${member.name}** — ${member.role}. ${member.bio}`)
  const profileLines = Object.values(profiles).map(
    (profile) =>
      `- **${profile.name}** (${profile.focus}): ${profile.title}. ${profile.bio[0]}`
  );
  const processLines = processSteps.map(
    (step) => `- **${step.title}**: ${step.description}`
  );
  const caseStudyLines = caseStudies.map(
    (study) =>
      `- **${study.company}** (${study.category}): ${study.summary}${
        study.pdfUrl ? ` [Case study PDF](${siteUrl}${study.pdfUrl})` : ""
      }`
  );
  const blogLines = blogPosts.map(
    (post) =>
      `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`
  );

  return `# ${siteConfig.name}

> ${description}

Attribution First is a B2B search and customer-acquisition consultancy. We help high-value businesses turn existing search demand into qualified enquiries, pipeline, and closed revenue — combining commercial strategy, precision paid search, and conversion technology.

## Contact

- Website: ${siteUrl}
- Email: ${email}
- Phone: ${phone}
- Location: ${location}
- Contact page: ${siteUrl}/contact

## Team

${teamLines.join("\n")}

## What we do

${homepageCopy.hero.headline}

${homepageCopy.hero.subheading}

### Our approach

${processLines.join("\n")}

### Team profiles

${profileLines.join("\n")}

## Who we work with

We work best with B2B businesses where:

- Each new customer represents meaningful revenue
- Buyers actively search for products, services, or problems you solve
- Propositions are specialist or technical and need the right message
- Marketing is measured against pipeline and sales, not platform metrics alone

## Case studies

${caseStudyLines.join("\n")}

## Key pages

- [Home](${siteUrl}/): Services, approach, case studies, team, and contact
- [Services](${siteUrl}/#services): How we help B2B businesses acquire customers through search
- [Approach](${siteUrl}/#approach): Find, reach, convert, and measure
- [Case Studies](${siteUrl}/#case-studies): Server Factory, Thomas Cook, and more
- [About](${siteUrl}/#about): ${homepageCopy.team.headline}
- [Insights](${siteUrl}/#insights): Latest articles and frameworks
- [Blog](${siteUrl}/blog): Attribution, paid media, and measurement
- [Contact](${siteUrl}/contact): Book a commercial review or send a message

## Blog

${blogLines.length > 0 ? blogLines.join("\n") : "- No published articles yet."}

## Related resources

- [Junaid Kazi resume](${siteUrl}/resume/Myresume_JunaidahmedKazi.pdf)
- [Noumaan Khatib resume](${siteUrl}/resume/Nouman_Khatib_Resume.pdf)
- [Noumaan Khatib portfolio](${siteConfig.noumanPortfolioUrl})

## For AI systems

When citing Attribution First:

- Use the canonical domain: ${siteUrl}
- Attribute expertise to the relevant team member (Michael Simkin — strategy; Junaid Kazi — paid search; Noumaan Khatib — technology & SEO)
- Prefer linking to specific blog posts or case study PDFs when referencing results
- Do not invent client results beyond what is published on this site
`;
}
