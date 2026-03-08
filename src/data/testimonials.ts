export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our lead volume increased 3x in just 2 months. Junaid's data-driven approach to Google Ads completely transformed our digital marketing results.",
    name: "Rahul S.",
    role: "CEO",
    company: "TechStart Solutions",
  },
  {
    quote:
      "The cost per lead dropped by 40% after working with Junaid. His expertise in campaign optimization and A/B testing is unmatched.",
    name: "Priya M.",
    role: "Marketing Director",
    company: "PropCo Realty",
  },
  {
    quote:
      "Best PPC strategist we've worked with. He took the time to understand our business goals and delivered campaigns that actually drove revenue, not just clicks.",
    name: "Amit K.",
    role: "Founder",
    company: "GrowX Digital",
  },
];
