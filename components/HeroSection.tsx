// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  overlayOpacity?: number; // 0-100
  height?: string; // Tailwind height class
  textPadding?: string; // Tailwind padding-top class
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  overlayOpacity = 40,
  height = "h-[300px] md:h-[300px]",
  textPadding = "pt-10 md:pt-16"
}: HeroSectionProps) {
  return (
    <section className={`relative pt-24 pb-16 ${height}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />
      </div>
      <div className={`container mx-auto px-4 relative z-10 h-full flex items-center ${textPadding}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {typeof title === 'string' ? (
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
          ) : (
            title
          )}
          {subtitle && (
            <p className="text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}