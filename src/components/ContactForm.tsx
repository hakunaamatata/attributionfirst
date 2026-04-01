"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value.trim(),
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value.trim(),
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value.trim(),
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Message sent!</h3>
        <p className="text-text-secondary">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
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
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
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
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
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
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
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

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg || "Failed to send. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
