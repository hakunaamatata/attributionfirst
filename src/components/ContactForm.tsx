"use client";

import { useState, FormEvent } from "react";
import { Send, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const contactFormEmail =
  process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL ?? siteConfig.email;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement).value.trim();
    const email = (form.querySelector('[name="email"]') as HTMLInputElement).value.trim();
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement).value.trim();
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim();

    const subject = encodeURIComponent("Contact from portfolio – " + (name || "Someone"));
    const body = encodeURIComponent(
      ["Name: " + (name || "—"), "Email: " + (email || "—"), "Phone: " + (phone || "—"), "", "Message:", message || "—"].join("\n")
    );
    window.location.href = `mailto:${contactFormEmail}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Open your email app
        </h3>
        <p className="text-text-secondary mb-4">
          Your default email app should open with the message ready. Click Send to deliver it.
        </p>
        <a
          href={`mailto:${contactFormEmail}`}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          <Mail className="w-4 h-4" />
          Or email {contactFormEmail} directly
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="+91-XXXXXXXXXX"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your project and goals..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors w-full sm:w-auto"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}
