
import type React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  fullWidth?: boolean
}

export function Section({ children, className, containerSize = "lg", fullWidth = false }: SectionProps) {
  if (fullWidth) {
    return <section className={cn("w-full", className)}>{children}</section>
  }

  return (
    <section className={cn("w-full", className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}
