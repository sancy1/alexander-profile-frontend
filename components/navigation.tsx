"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
  // { name: "Blog", href: "/blog" },
  { name: "Playground", href: "/playground" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isScrolled ? 0 : 20,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-slate-200 shadow-lg" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
                ASC
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Alexander S. Cyril</h1>
                <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                  Software Engineer
                </Badge>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            {/* <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className="block px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="px-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
