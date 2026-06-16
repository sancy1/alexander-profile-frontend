

"use client"

import { motion } from "framer-motion"
import { Mail, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import DateTimeLocationWeather from "./DateTimeLocationWeather"
import React, { useState } from "react"
import { useNewsletterSubscription } from "@/hooks/use-newsletter-subscription";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
  // { name: "Codehub", href: "/codehub" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-s-cyril-603a2528a/",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/sancy1",
    color: "hover:text-slate-900",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    href: "#", // Keep as fallback
    onClick: () => {
      const phoneNumber = "2349067467561"; // Your number without + or dashes
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, "_blank");
    },
    color: "hover:text-green-600",
  }
]

export default function Footer() {
  const { email, setEmail, isSubmitting, localMessage, handleSubscribe } = useNewsletterSubscription();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
                  ASC
                </div>
                <div>
                  <h3 className="text-lg font-bold">Alexander Cyril</h3>
                  <Badge className="bg-emerald-600 text-white text-xs">Software Engineer</Badge>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Passionate software engineer specializing in full-stack and desktop development, machine learning, and
                data analytics. Building innovative solutions that transform ideas into reality.
              </p>
              
              <div className="flex gap-4 text-sm">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    onClick={(e) => {
                      if (social.onClick) {
                        e.preventDefault();
                        social.onClick();
                      }
                    }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Get In Touch & Newsletter Section - Side by Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Get In Touch Column */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-emerald-400">Get In Touch</h4>
                  <div className="space-y-4 text-sm">
                    <Link
                      href="mailto:alexander.s.cyril@gmail.com"
                      className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-emerald-400" />
                      <span>alexander.s.cyril@gmail.com</span>
                    </Link>

                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-emerald-400" />
                      <Link
                        href="https://www.alexander.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-emerald-400 transition-colors"
                      >
                        https://www.alexander.xyz
                      </Link>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">+(234) 902-216-2214 | 906-746-7561</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">Available Worldwide</span>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup Column - Far Right */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 text-emerald-400">Stay Updated</h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Get the latest insights and updates delivered to your inbox. No spam.
                  </p>

                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors w-full"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 w-full"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </button>
                    </div>
                    
                    {localMessage.type && (
                      <div
                        className={`
                          p-3 rounded-md flex items-center gap-2 text-xs w-full
                          ${localMessage.type === "success" ? "bg-emerald-800 text-emerald-200 border border-emerald-700" : ""}
                          ${localMessage.type === "error" ? "bg-red-800 text-red-200 border border-red-700" : ""}
                        `}
                        role="alert"
                      >
                        {localMessage.type === "success" && <CheckCircle className="w-4 h-4 flex-shrink-0" />}
                        {localMessage.type === "error" && <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                        <p className="font-medium">{localMessage.text}</p>
                      </div>
                    )}
                    <p className="text-xs text-slate-500 w-full">
                      No spam, unsubscribe anytime. Just quality content updates.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Date/Time/Weather Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 max-w-6xl mx-auto">
            <DateTimeLocationWeather />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="max-w-6xl mx-auto text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              <p className="text-slate-400 text-sm flex items-center gap-2 italic">
                © {new Date().getFullYear()} Alexander Sanchez Cyril
                <Code2 className="w-4 h-4 text-emerald-400" />
              </p>

              <div className="flex gap-6 text-sm text-slate-400">
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
                <Link href="/unsubscribe" passHref>
                  <span className="hover:text-emerald-400 transition-colors cursor-pointer">Unsubscribe</span>
                </Link>
                <a href="/sitemap.xml" target="blank">
                  <span className="hover:text-emerald-400 transition-colors cursor-pointer">Sitemap</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}