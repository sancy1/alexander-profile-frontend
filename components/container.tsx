import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl !important",
    md: "max-w-5xl !important",
    lg: "max-w-6xl !important",
    xl: "max-w-7xl !important",
    full: "max-w-none",
  }

  return (
    <div
      className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      style={{
        maxWidth:
          size === "sm"
            ? "768px"
            : size === "md"
              ? "1024px"
              : size === "lg"
                ? "1152px"
                : size === "xl"
                  ? "1280px"
                  : "none",
      }}
    >
      {children}
    </div>
  )
}
