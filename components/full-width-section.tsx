import type React from "react"
import { cn } from "@/lib/utils"

interface FullWidthSectionProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  backgroundColor?: string
}

export function FullWidthSection({
  children,
  className,
  contentClassName,
  backgroundColor = "bg-slate-50",
}: FullWidthSectionProps) {
  return (
    <div className="relative">
      {/* Full-width background */}
      <div
        className={cn("absolute inset-0 w-screen", backgroundColor)}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1,
        }}
      />

      {/* Content container */}
      <section className={cn("relative py-20", className)}>
        <div className={cn("container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", contentClassName)}>{children}</div>
      </section>
    </div>
  )
}
