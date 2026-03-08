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
        className="group relative flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </a>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-teal-500 animate-pulse-ring" />
        <MessageCircle className="w-6 h-6 relative z-10" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-teal-500 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
