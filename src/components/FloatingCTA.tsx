"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={siteConfig.callUrl}
        className="group relative flex items-center justify-center w-14 h-14 bg-bg-card border border-white/10 text-white rounded-full shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-accent/15 transition-all duration-200 hover:scale-105 hover:border-accent/30 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" aria-hidden="true" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-bg-card text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10">
          Call Now
        </span>
      </a>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-whatsapp/20 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" aria-hidden="true" />
        <MessageCircle className="w-6 h-6 relative z-10" aria-hidden="true" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-whatsapp text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
