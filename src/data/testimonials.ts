export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Efficient, capable, knowledgable, friendly and reliable. If you need a PPC expert and you want your campaign to be successful — better hire Junaid.",
    name: "Michael Simkin",
    role: "Client",
    company: "Climate-Tech & Wellness",
  },
  {
    quote:
      "A pleasant and reliable experience. He takes on my toughest requests and always delivers prompt solutions. His experience in the industry is clear in the detail of his work.",
    name: "Zachary Miller",
    role: "Sr. Campaign Manager",
    company: "ReachLocal",
  },
  {
    quote:
      "A quick learner who effortlessly stays on top of tasks, ensuring projects are completed with efficiency and precision. His proactive approach makes him a great asset to any team.",
    name: "Sarah Tropper",
    role: "Manager",
    company: "Marketing & Advertising",
  },
  {
    quote:
      "Someone you can really count on. He knows what he is doing and helped us curate various strategies. A growthful experience to work by his side.",
    name: "Zaid Khan",
    role: "Founder",
    company: "Froheyo",
  },
];
