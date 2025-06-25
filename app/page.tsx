"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Code, Database, Brain, Zap, Smartphone, ArrowRight, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WhatsAppFloat from "@/components/whatsapp-float"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from 'next/link';
import { FullWidthSection } from "@/components/full-width-section"

const heroSlides = [
  {
    title: "Crafting Innovative Digital Solutions",
    subtitle: "Full-Stack Development Excellence",
    description: "Building robust, scalable applications from concept to deployment",
    tags: ["Next.js", "Django", "Python", "React", "Node.js"],
    // icon: Code,
    image: "images/slider/Digital-Solutions.jpg",
    showGreeting: true,
  },
  {
    title: "Driving Insights Through Data & AI",
    subtitle: "Machine Learning & Data Science",
    description: "Transforming data into intelligent, actionable insights",
    tags: ["AI", "ML", "Pandas", "NumPy", "Scikit-learn"],
    // icon: Brain,
    image: "images/slider/ML-AI.jpg", 
  },
  {
    title: "Optimizing Processes, Maximizing Efficiency",
    subtitle: "Automation & System Optimization",
    description: "Streamlining workflows with intelligent automation solutions",
    tags: ["Automation", "Selenium", "Process Optimization", "Data Analysis"],
    // icon: Zap,
    image: "images/slider/task.jpg",
  },
  {
    title: "Building Cross-Platform Mobile Experiences",
    subtitle: "Mobile App Development",
    description: "Creating performant mobile applications for iOS and Android with React Native",
    tags: ["React Native", "Firebase", "iOS", "Android", "Expo"],
    image: "images/slider/mobile2.jpg", 
  }
]


const expertiseCards = [
  {
    title: "Software Development",
    description:
      "Building robust and intuitive web applications from concept to deployment, specializing in both backend and frontend technologies.",
    tags: ["Next.js", "Django", "Python", "React", "Node.js"],
    icon: Code,
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Developing intelligent systems and predictive models to unlock new possibilities and drive informed decision-making.",
    tags: ["Pandas", "NumPy", "Scikit-learn", "AI", "ML"],
    icon: Brain,
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Data & Process Optimization",
    description:
      "Transforming raw data into actionable insights and streamlining workflows for enhanced efficiency and performance.",
    tags: ["Data Analysis", "SQL", "Automation", "Selenium", "Excel"],
    icon: Database,
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with React Native and Firebase for seamless performance and real-time functionality.",
    tags: ["React Native", "Firebase", "iOS", "Android", "Expo"],
    icon: Smartphone, // Make sure to import Smartphone from lucide-react
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  // const IconComponent = heroSlides[currentSlide].icon
  const IconComponent = heroSlides[currentSlide]
    return (
    <div className="min-h-screen">
      <Navigation />


 
{/* Hero Section with Slider - Optimized for Tablet */}

<FullWidthSection
  backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100" // ⭐ CHANGED: Moved background here from original section's className ⭐
  className="relative min-h-screen flex items-center justify-center overflow-hidden" // ⭐ CHANGED: Moved other relevant classes here from original section's className ⭐
>
  <div className="container mx-auto px-4 z-10 h-full flex items-center">
    <div className="w-full max-w-7xl mx-auto h-full flex items-center">

  
  <AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full relative"
    >
    <div className="text-center md:text-left order-2 lg:order-1 px-4 md:px-0">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 md:mb-8"
      >
        </motion.div>

      {heroSlides[currentSlide].showGreeting && (
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Hi, I'm <span className="text-emerald-600">Alexander</span>
        </motion.h1>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-4 md:mb-6"
      >
        {heroSlides[currentSlide].title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
      >
        {heroSlides[currentSlide].description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 md:mb-8"
      >
        {heroSlides[currentSlide].tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium"
          >
            {tag}
          </Badge>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
      >
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3">
          Let's Innovate Together
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-2 sm:py-3"
        >
          View My Work
          <Eye className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative order-1 lg:order-2 w-full h-64 sm:h-72 md:h-[28rem] lg:h-96"
      >
      <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
        <Image
          src={heroSlides[currentSlide].image || "/placeholder.svg"}
          alt={heroSlides[currentSlide].title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </motion.div>
  </motion.div>
</AnimatePresence>
      
{/* <AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-center w-full relative"
  >
   
    <div className="text-center md:text-left order-2 md:order-1 px-4 md:px-0">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 md:mb-8"
      >
   
      </motion.div>

      {heroSlides[currentSlide].showGreeting && (
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Hi, I'm <span className="text-emerald-600">Alexander</span>
        </motion.h1>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-4 md:mb-6"
      >
        {heroSlides[currentSlide].title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
      >
        {heroSlides[currentSlide].description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 md:mb-8"
      >
        {heroSlides[currentSlide].tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium"
          >
            {tag}
          </Badge>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
      >
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3">
          Let's Innovate Together
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-2 sm:py-3"
        >
          View My Work
          <Eye className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </motion.div>
    </div>

   
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      
      className="relative order-1 md:order-2 w-full h-64 sm:h-72 md:h-[28rem] lg:h-96"
    >
      <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
        <Image
          src={heroSlides[currentSlide].image || "/placeholder.svg"}
          alt={heroSlides[currentSlide].title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </motion.div>
  </motion.div>
</AnimatePresence> */}

    </div>
  </div>

  {/* Slider Controls - Centered and responsive */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4">
    <Button
      variant="outline"
      size="icon"
      onClick={prevSlide}
      className="bg-white/90 backdrop-blur-sm hover:bg-white border-emerald-200 w-8 h-8 sm:w-10 sm:h-10"
    >
      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
    </Button>

    <div className="flex gap-1 sm:gap-2">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setCurrentSlide(index)
            setIsAutoPlaying(false)
          }}
          className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? "bg-emerald-600 w-6 sm:w-8" : "bg-white/60 w-2 sm:w-3"
          }`}
        />
      ))}
    </div>

    <Button
      variant="outline"
      size="icon"
      onClick={nextSlide}
      className="bg-white/90 backdrop-blur-sm hover:bg-white border-emerald-200 w-8 h-8 sm:w-10 sm:h-10"
    >
      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
    </Button>
  </div>
</FullWidthSection>



{
/* Beautiful Introduction Section with Matching Widths */}
<FullWidthSection className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Mobile: Full width, Desktop: Constrained */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-none sm:max-w-6xl lg:max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Solid Background Heading Card - Full Width on Mobile */}
            <motion.div
              whileHover={{ y: -3 }}
              className="relative mb-8 sm:mb-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg sm:rounded-2xl p-6 sm:p-8 shadow-md w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
                Passionate Software Engineer
                <br />
                <span className="text-emerald-100">& Data Professional</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-16 sm:w-24 h-1 bg-white/50 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg text-emerald-50 text-center mt-4 leading-relaxed">
                Creating digital solutions that bridge technology and business needs
              </p>
            </motion.div>

            {/* Main Content Card - Full Width on Mobile */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-lg sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-100 relative overflow-hidden w-full"
            >
              <div className="flex items-start mb-6 sm:mb-8">
                <div className="flex-shrink-0 mr-3 sm:mr-4 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">Alexander S. Cyril</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Full-Stack Developer & Data Specialist</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    I'm a passionate and results-oriented software engineer with a strong foundation in full-stack
                    development, mobile applications (React Native), backend systems, data analytics, and intelligent
                    automation. With an academic background in Software Development and a track record of self-initiated
                    tech projects, I specialize in building scalable cross-platform applications that solve real-world
                    problems.
                  </p>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    My passion lies in creating seamless user experiences across web and mobile platforms, automating
                    processes, and building solutions powered by data and logic. I combine technical expertise with
                    creative problem-solving to deliver innovative digital solutions that work beautifully on any
                    device.
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex justify-center sm:justify-end">
                <div className="text-slate-400 font-serif italic flex items-center text-sm sm:text-base">
                  <span className="mr-2">Let's build something amazing</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Stats Section - Full Width Grid on Mobile */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
              {[
                { value: "1+", label: "Years Experience", border: "border-t-emerald-400", text: "text-emerald-600" },
                { value: "15+", label: "Projects Completed", border: "border-t-purple-400", text: "text-purple-600" },
                { value: "25+", label: "Major Technologies", border: "border-t-blue-400", text: "text-blue-600" },
                { value: "100%", label: "Client Satisfaction", border: "border-t-orange-400", text: "text-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all border-t-4 ${stat.border} ${stat.text}`}
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </FullWidthSection>






{/* Collaboration Banner Section */}
{/* Collaboration Banner with Universal Image Opacity Control */}
<section className="relative pt-12 md:pt-20 pb-16 md:pb-24 w-full max-w-6xl mx-auto px-4">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    {/* Background Image with Universal Opacity Control */}
    <div className="absolute inset-0 bg-black/70 z-0"></div> {/* Uniform 50% darkness - adjust /50 value as needed */}
    <Image 
      src="/images/slider/ideal4.png"
      alt="Let's build your software idea together"
      width={1440}
      height={600}
      className="w-full h-full object-cover absolute inset-0 opacity-10" 
      priority
    />
    
    {/* Content Container */}
    <div className="relative z-10 px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Got a <span className="text-emerald-300">Software Idea</span> for Your Business?
        </h2>
        
        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
          Let's brainstorm together! I'll help you refine your concept and transform it into a fully functional digital solution tailored to your business needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" passHref>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Let's Discuss Your Idea
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          {/* <Link href="/portfolio" passHref>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              See My Work
              <Eye className="ml-2 w-5 h-5" />
            </Button>
          </Link> */}

        </div>
      </div>
    </div>
  </div>
</section>





{/* Key Expertise Highlights */}
<FullWidthSection className="py-20 bg-slate-50 w-full">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Delivering comprehensive solutions across the full technology stack
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {expertiseCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          {/* Gradient background overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          {/* Main card */}
          <div className={`h-full border-2 ${card.borderColor} rounded-2xl bg-white overflow-hidden transition-all duration-300 group-hover:shadow-xl relative z-10`}>
            {/* Icon with gradient background */}
            <div className={`w-full h-32 bg-gradient-to-r ${card.gradient} flex items-center justify-center`}>
              <div className={`p-4 ${card.iconBg} rounded-full backdrop-blur-sm bg-white/20`}>
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{card.description}</p>
              
              {/* Tags with animated hover effect */}
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      className={`${card.iconColor} bg-white border ${card.borderColor} hover:bg-opacity-10 hover:shadow-sm text-sm font-medium`}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Subtle corner accent */}
            <div className={`absolute bottom-0 right-0 w-16 h-16 ${card.bgColor} rounded-tl-full opacity-20`}></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</FullWidthSection>



      {/* Quick Access Buttons */}
      {/* <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
              
              <Link href="/portfolio" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
              >
                See Portfolio
              </Button>
              </Link>

              <Link href="/contact" passHref>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Hire Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </section> */}



<FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-emerald-500 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-teal-500 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            {/* <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Let's collaborate to create solutions that drive real business impact.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
              
              <Link href="/portfolio" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
              >
                See Portfolio
              </Button>
              </Link>

              <Link href="/contact" passHref>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Hire Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </FullWidthSection>


      {/* <Footer /> */}
      <WhatsAppFloat />
    </div>
  )
}
