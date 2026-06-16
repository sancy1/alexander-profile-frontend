
"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Smartphone, ArrowRight, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import WhatsAppFloat from "@/components/whatsapp-float"
import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from 'next/link';
import { FullWidthSection } from "@/components/full-width-section"
import { useResumeActions } from "@/hooks/use-resume-actions";
import HeroSlider from "@/components/hero-slider"
import TechnologiesSection from "@/components/technologies-section"

// const expertiseCards = [
//   {
//     title: "Software Development",
//     description:
//       "Building robust and intuitive web applications from concept to deployment, specializing in both backend and frontend technologies.",
//     tags: ["C#", "ASP.NET Core", "Python", "Django", "FastAPI", "Go", "JavaScript", "TypeScript", "Node.js", "Next.js"],
//     icon: Code,
//     gradient: "from-emerald-500 to-teal-600",
//     bgColor: "bg-emerald-50",
//     borderColor: "border-emerald-200",
//     iconBg: "bg-emerald-100",
//     iconColor: "text-emerald-600",
//   },
//   {
//     title: "Machine Learning & AI",
//     description:
//       "Developing intelligent systems and predictive models to unlock new possibilities and drive informed decision-making.",
//     tags: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "NLP", "LLMs", "Hugging Face", "NumPy"],
//     icon: Brain,
//     gradient: "from-purple-500 to-indigo-600",
//     bgColor: "bg-purple-50",
//     borderColor: "border-purple-200",
//     iconBg: "bg-purple-100",
//     iconColor: "text-purple-600",
//   },
//   {
//     title: "Data & Process Optimization",
//     description:
//       "Transforming raw data into actionable insights and streamlining workflows for enhanced efficiency and performance.",
//     tags: ["Pandas", "Matplotlib", "Data Analysis", "SQL", "Automation", "Selenium", "Excel"],
//     icon: Database,
//     gradient: "from-orange-500 to-red-600",
//     bgColor: "bg-orange-50",
//     borderColor: "border-orange-200",
//     iconBg: "bg-orange-100",
//     iconColor: "text-orange-600",
//   },
//   {
//     title: "Desktop Development",
//     description:
//       "Developing cross-platform desktop applications with Electron for smooth performance and real-time functionality.",
//     tags: ["React", "Node", "Django", "Electron", "Tkinter"],
//     icon: Smartphone,
//     gradient: "from-blue-500 to-cyan-600",
//     bgColor: "bg-blue-50",
//     borderColor: "border-blue-200",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//   },
// ]


export default function HomePage() {
  const { downloadResume, viewResume } = useResumeActions();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />

{/* 1. Outer Container (The Window): Heights reduced to strictly cut off extra bottom space */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <div 
    style={{ clipPath: 'inset(0 0 0 0)' }} 
    className="relative w-full h-[700px] sm:h-[480px] lg:h-[420px] overflow-hidden"
  >
    {/* 2. Fixed Canvas Wrapper: Stays locked to viewport, only visible inside the window */}
    <div className="fixed inset-0 w-full h-full pointer-events-auto">
      {/* Full-width background - forced to span entire viewport like other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" 
           style={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      {/* 3. Section Content: Swapped 'py' for 'pt' and 'pb' to trim the bottom inner spacing */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-none sm:max-w-6xl lg:max-w-5xl mx-auto">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8 lg:mb-10"
            >
              <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-600 mb-3">My Journey</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Impact by the Numbers</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full">
              {[
                { 
                  value: "3+", 
                  label: "Years Building Software", 
                  gradient: "from-emerald-500 to-teal-500",
                  bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
                  shadowColor: "shadow-emerald-500/20",
                  icon: "💻"
                },
                { 
                  value: "8+", 
                  label: "Deployed Projects", 
                  gradient: "from-purple-500 to-indigo-500",
                  bgGradient: "bg-gradient-to-br from-purple-50 to-indigo-50",
                  shadowColor: "shadow-purple-500/20",
                  icon: "🚀"
                },
                { 
                  value: "4", 
                  label: "Engineering Domains", 
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
                  shadowColor: "shadow-blue-500/20",
                  icon: "⚙️"
                },
                { 
                  value: "25+", 
                  label: "Technologies & Tools", 
                  gradient: "from-orange-500 to-rose-500",
                  bgGradient: "bg-gradient-to-br from-orange-50 to-rose-50",
                  shadowColor: "shadow-orange-500/20",
                  icon: "🛠️"
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Neo-glow background effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition duration-500 ${stat.shadowColor}`}></div>
                  
                  {/* Card content */}
                  <div className={`relative ${stat.bgGradient} backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 text-5xl md:text-6xl opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      {stat.icon}
                    </div>
                    
                    {/* Gradient bar at top */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    {/* Value */}
                    <div className={`text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 md:mb-3`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-slate-600 font-semibold text-xs sm:text-sm md:text-base leading-tight">
                      {stat.label}
                    </div>
                    
                    {/* Decorative dot */}
                    <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    <FullWidthSection 
      className="py-20 w-full overflow-hidden relative"
      backgroundColor="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      contentClassName="relative z-10"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Static stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
        
        {/* Glowing stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`glow-star-${i}`}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
              backgroundColor: `rgba(255, 200, ${100 + Math.random() * 155}, 0.8)`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(255, 200, 100, 0.6)`,
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute animate-shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        ))}
        
        {/* Moving stars clusters */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="relative w-40 h-40">
            {[...Array(8)].map((_, i) => (
              <div
                key={`cluster-1-${i}`}
                className="absolute rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-32 right-10 animate-float-medium">
          <div className="relative w-60 h-60">
            {[...Array(12)].map((_, i) => (
              <div
                key={`cluster-2-${i}`}
                className="absolute rounded-full bg-yellow-200/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 5 + 1}px`,
                  height: `${Math.random() * 5 + 1}px`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="text-sm font-mono tracking-[0.2em] uppercase bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              What I Do Best
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Core <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Delivering comprehensive solutions across the full technology stack
        </p>
      </motion.div>

      {/* Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 - Full-Stack Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <Code className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Full-Stack Development
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Building modern web applications from concept to deployment with scalable backend services, responsive user interfaces, and production-ready architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "JavaScript", "ASP.NET Core", "Django"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-500 to-teal-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        {/* Card 2 - Backend Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <Database className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Backend Engineering
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Designing scalable APIs, authentication systems, databases, and service architectures focused on performance, reliability, and maintainability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "FastAPI", "C#", "Java", "GO", "PostgreSQL", "REST APIs", "JWT"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500 to-cyan-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        {/* Card 3 - AI & Agentic Systems */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                AI & Agentic Systems
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Developing intelligent applications using agentic workflows, retrieval systems, tool-calling, contextual memory, and modern LLM orchestration frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["LangGraph", "LangChain", "LlamaIndex", "RAG", "MCP", "Tool Calling"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        {/* Card 4 - Cloud & DevOps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Cloud & DevOps
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Containerizing applications, automating deployments, and implementing cloud-native development practices for reliable production systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Docker", "CI/CD", "GitHub Actions", "Terraform", "AWS", "Docker Compose"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500 to-red-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        {/* Card 5 - Distributed Systems */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Distributed Systems
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Building event-driven and service-oriented architectures that support scalability, asynchronous communication, and system resilience.
              </p>
              <div className="flex flex-wrap gap-2">
                {["RabbitMQ", "Kafka", "Redis", "Microservices", "Caching", "Event-Driven Design", "API Integration"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500 to-rose-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>

        {/* Card 6 - Developer Tools & Automation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-20"></div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-pulse-slow"></div>
              <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-green-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Developer Tools & Automation
              </h3>
              <p className="text-slate-300 mb-5 leading-relaxed text-sm">
                Creating tools and automation solutions that improve developer productivity, streamline workflows, and reduce manual processes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Tkinter", "Automation", "Web Scraping", "NLTK", "Developer Tools"].map((tag, tagIndex) => (
                  <motion.div key={tagIndex} whileHover={{ scale: 1.08, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-500 to-emerald-500 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); box-shadow: 0 0 20px rgba(255, 200, 100, 0.8); }
        }
        
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
          100% { transform: translateX(-200px) translateY(200px) rotate(45deg); opacity: 0; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow ease-in-out infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </FullWidthSection>
    
    <WhatsAppFloat />
    <TechnologiesSection />

    </div>
  )
}