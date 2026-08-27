"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  highlightWords?: string[];
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
  highlightWords = [],
}: TextRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = text.split(" ");

  if (!mounted) {
    return (
      <Tag className={className}>
        {words.map((word, i) => {
          const clean = word.replace(/[.,!?]/g, "");
          const isHighlight = highlightWords.some(
            (hw) => clean.toLowerCase() === hw.toLowerCase()
          );
          return (
            <span key={i} className={isHighlight ? "gradient-text" : undefined}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => {
        const clean = word.replace(/[.,!?]/g, "");
        const isHighlight = highlightWords.some(
          (hw) => clean.toLowerCase() === hw.toLowerCase()
        );
        return (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className={`inline-block ${isHighlight ? "gradient-text" : ""}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
