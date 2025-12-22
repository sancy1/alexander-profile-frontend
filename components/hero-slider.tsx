
// // components/hero-slider.tsx

// // "use client"

// // import { useState, useEffect, useCallback, useRef } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { ChevronLeft, ChevronRight, ArrowRight, Eye } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import Image from "next/image"
// // import Link from "next/link"

// // interface Slide {
// //   title: string
// //   subtitle?: string
// //   description: string
// //   tags: string[]
// //   image: string
// //   showGreeting?: boolean
// // }

// // interface HeroSliderProps {
// //   slides: Slide[]
// //   autoPlayInterval?: number
// // }

// // export default function HeroSlider({ slides, autoPlayInterval = 7000 }: HeroSliderProps) {
// //   const [currentSlide, setCurrentSlide] = useState(0)
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
// //   const [isTransitioning, setIsTransitioning] = useState(false)
// //   const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

// //   const nextSlide = useCallback(() => {
// //     if (isTransitioning) return
    
// //     setIsTransitioning(true)
// //     setCurrentSlide((prev) => (prev + 1) % slides.length)
// //     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
// //     // Clear any existing timeout
// //     if (transitionTimeoutRef.current) {
// //       clearTimeout(transitionTimeoutRef.current)
// //     }
    
// //     // Set timeout to clear transitioning state
// //     transitionTimeoutRef.current = setTimeout(() => {
// //       setIsTransitioning(false)
// //     }, 800) // Match animation duration
// //   }, [slides.length, isTransitioning])

// //   const prevSlide = useCallback(() => {
// //     if (isTransitioning) return
    
// //     setIsTransitioning(true)
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// //     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
// //     // Clear any existing timeout
// //     if (transitionTimeoutRef.current) {
// //       clearTimeout(transitionTimeoutRef.current)
// //     }
    
// //     // Set timeout to clear transitioning state
// //     transitionTimeoutRef.current = setTimeout(() => {
// //       setIsTransitioning(false)
// //     }, 800) // Match animation duration
// //   }, [slides.length, isTransitioning])

// //   const goToSlide = useCallback((index: number) => {
// //     if (isTransitioning || index === currentSlide) return
    
// //     setIsTransitioning(true)
// //     setCurrentSlide(index)
// //     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
// //     // Clear any existing timeout
// //     if (transitionTimeoutRef.current) {
// //       clearTimeout(transitionTimeoutRef.current)
// //     }
    
// //     // Set timeout to clear transitioning state
// //     transitionTimeoutRef.current = setTimeout(() => {
// //       setIsTransitioning(false)
// //     }, 800) // Match animation duration
// //   }, [currentSlide, isTransitioning])

// //   // Auto-play effect
// //   useEffect(() => {
// //     if (!isAutoPlaying) return

// //     const interval = setInterval(() => {
// //       if (!isTransitioning) {
// //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// //       }
// //     }, autoPlayInterval)

// //     return () => clearInterval(interval)
// //   }, [isAutoPlaying, autoPlayInterval, slides.length, isTransitioning])

// //   // Cleanup timeout on unmount
// //   useEffect(() => {
// //     return () => {
// //       if (transitionTimeoutRef.current) {
// //         clearTimeout(transitionTimeoutRef.current)
// //       }
// //     }
// //   }, [])

// //   return (
// //     <div className="relative w-full h-full">
// //       {/* Slides Container */}
// //       <div className="relative h-full w-full overflow-hidden">
// //         <AnimatePresence mode="wait" initial={false}>
// //           <motion.div
// //             key={currentSlide}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ 
// //               duration: 0.8, 
// //               ease: [0.22, 1, 0.36, 1]
// //             }}
// //             className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full h-full"
// //           >
// //             {/* Left Column: Content */}
// //             <div className="text-center md:text-left order-2 lg:order-1 px-4 md:px-0 h-full flex flex-col justify-center">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.3 }}
// //                 className="mb-6 md:mb-8"
// //               >
// //                 {slides[currentSlide].showGreeting && (
// //                   <motion.h1
// //                     initial={{ opacity: 0, y: 30 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: 0.3 }}
// //                     className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
// //                   >
// //                     Hi, I'm <span className="text-emerald-300">Alexander</span>
// //                   </motion.h1>
// //                 )}
// //               </motion.div>

// //               <motion.h2
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.4 }}
// //                 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6"
// //               >
// //                 {slides[currentSlide].title}
// //               </motion.h2>

// //               <motion.p
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.5 }}
// //                 className="text-base sm:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
// //               >
// //                 {slides[currentSlide].description}
// //               </motion.p>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.6 }}
// //                 className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 md:mb-8"
// //               >
// //                 {slides[currentSlide].tags.map((tag, index) => (
// //                   <motion.div
// //                     key={index}
// //                     initial={{ opacity: 0, scale: 0.8 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ delay: 0.7 + index * 0.1 }}
// //                   >
// //                     <Badge
// //                       className="bg-emerald-500/20 backdrop-blur-sm border-emerald-400/30 text-white hover:bg-emerald-500/30 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium"
// //                     >
// //                       {tag}
// //                     </Badge>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.8 }}
// //                 className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
// //               >
// //                 <Link href="/contact" passHref>
// //                   <Button 
// //                     size="lg" 
// //                     className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
// //                   >
// //                     Let's Innovate Together
// //                     <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
// //                   </Button>
// //                 </Link>

// //                 <Link href="/portfolio" passHref>
// //                   <Button
// //                     size="lg"
// //                     variant="outline"
// //                     className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105"
// //                   >
// //                     View My Work
// //                     <Eye className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
// //                   </Button>
// //                 </Link>
// //               </motion.div>
// //             </div>

// //             {/* Right Column: Image */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="relative order-1 lg:order-2 w-full h-64 sm:h-72 md:h-[28rem] lg:h-96"
// //             >
// //               <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-white/10">
// //                 <Image
// //                   src={slides[currentSlide].image || "/placeholder.svg"}
// //                   alt={slides[currentSlide].title}
// //                   fill
// //                   className="object-cover"
// //                   priority
// //                   sizes="(max-width: 1024px) 100vw, 50vw"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* Navigation Controls */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
// //         {/* Previous Button */}
// //         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             onClick={prevSlide}
// //             className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-10 h-10 rounded-full"
// //             disabled={isTransitioning}
// //           >
// //             <ChevronLeft className="w-5 h-5 text-white" />
// //           </Button>
// //         </motion.div>

// //         {/* Slide Indicators */}
// //         <div className="flex items-center gap-2">
// //           {slides.map((_, index) => (
// //             <motion.button
// //               key={index}
// //               onClick={() => goToSlide(index)}
// //               className="relative focus:outline-none"
// //               whileHover={{ scale: 1.2 }}
// //               whileTap={{ scale: 0.9 }}
// //               disabled={isTransitioning}
// //             >
// //               <div
// //                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                   index === currentSlide
// //                     ? "bg-white"
// //                     : "bg-white/50 hover:bg-white/70"
// //                 }`}
// //               />
// //               {index === currentSlide && (
// //                 <motion.div
// //                   layoutId="activeIndicator"
// //                   className="absolute inset-0 rounded-full border-2 border-white"
// //                   initial={false}
// //                   transition={{
// //                     type: "spring",
// //                     stiffness: 300,
// //                     damping: 30,
// //                   }}
// //                 />
// //               )}
// //             </motion.button>
// //           ))}
// //         </div>

// //         {/* Next Button */}
// //         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             onClick={nextSlide}
// //             className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-10 h-10 rounded-full"
// //             disabled={isTransitioning}
// //           >
// //             <ChevronRight className="w-5 h-5 text-white" />
// //           </Button>
// //         </motion.div>
// //       </div>

// //       {/* Progress Bar */}
// //       <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
// //         <motion.div
// //           key={currentSlide}
// //           initial={{ width: "0%" }}
// //           animate={{ width: "100%" }}
// //           transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
// //           className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
// //         />
// //       </div>

// //       {/* Slide Counter */}
// //       <div className="absolute top-8 right-8 hidden lg:block">
// //         <div className="bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
// //           <span className="text-sm font-medium text-white">
// //             <span className="text-emerald-300">{currentSlide + 1}</span>
// //             <span className="text-white/60"> / {slides.length}</span>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


























// "use client"

// import { useState, useEffect, useCallback, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight, ArrowRight, Eye } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Image from "next/image"
// import Link from "next/link"

// interface Slide {
//   title: string
//   subtitle?: string
//   description: string
//   tags: string[]
//   image: string
//   showGreeting?: boolean
// }

// interface HeroSliderProps {
//   slides: Slide[]
//   autoPlayInterval?: number
// }

// export default function HeroSlider({ slides, autoPlayInterval = 7000 }: HeroSliderProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [isTransitioning, setIsTransitioning] = useState(false)
//   const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return
    
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
//     // Clear any existing timeout
//     if (transitionTimeoutRef.current) {
//       clearTimeout(transitionTimeoutRef.current)
//     }
    
//     // Set timeout to clear transitioning state
//     transitionTimeoutRef.current = setTimeout(() => {
//       setIsTransitioning(false)
//     }, 800) // Match animation duration
//   }, [slides.length, isTransitioning])

//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return
    
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
//     // Clear any existing timeout
//     if (transitionTimeoutRef.current) {
//       clearTimeout(transitionTimeoutRef.current)
//     }
    
//     // Set timeout to clear transitioning state
//     transitionTimeoutRef.current = setTimeout(() => {
//       setIsTransitioning(false)
//     }, 800) // Match animation duration
//   }, [slides.length, isTransitioning])

//   const goToSlide = useCallback((index: number) => {
//     if (isTransitioning || index === currentSlide) return
    
//     setIsTransitioning(true)
//     setCurrentSlide(index)
//     setIsAutoPlaying(true) // Keep auto-playing after manual navigation
    
//     // Clear any existing timeout
//     if (transitionTimeoutRef.current) {
//       clearTimeout(transitionTimeoutRef.current)
//     }
    
//     // Set timeout to clear transitioning state
//     transitionTimeoutRef.current = setTimeout(() => {
//       setIsTransitioning(false)
//     }, 800) // Match animation duration
//   }, [currentSlide, isTransitioning])

//   // Auto-play effect
//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       if (!isTransitioning) {
//         setCurrentSlide((prev) => (prev + 1) % slides.length)
//       }
//     }, autoPlayInterval)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying, autoPlayInterval, slides.length, isTransitioning])

//   // Cleanup timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (transitionTimeoutRef.current) {
//         clearTimeout(transitionTimeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     // <div className="relative w-full h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"> {/* ADDED MIN HEIGHT */}
//     <div className="relative w-full h-full min-h-[100px] md:min-h-[450px] lg:min-h-[100px]">

//       {/* Slides Container */}
//       <div className="relative h-full w-full overflow-hidden">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ 
//               duration: 0.8, 
//               ease: [0.22, 1, 0.36, 1]
//             }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full h-full"
//           >
//             {/* Left Column: Content */}
//             <div className="text-center md:text-left order-2 lg:order-1 px-4 md:px-0 h-full flex flex-col justify-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="mb-6 md:mb-8"
//               >
//                 {slides[currentSlide].showGreeting && (
//                   <motion.h1
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
//                   >
//                     Hi, I'm <span className="text-emerald-300">Alexander</span>
//                   </motion.h1>
//                 )}
//               </motion.div>

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6"
//               >
//                 {slides[currentSlide].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-base sm:text-lg text-slate-200 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 md:mb-8"
//               >
//                 {slides[currentSlide].tags.map((tag, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.7 + index * 0.1 }}
//                   >
//                     <Badge
//                       className="bg-emerald-500/20 backdrop-blur-sm border-emerald-400/30 text-white hover:bg-emerald-500/30 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium"
//                     >
//                       {tag}
//                     </Badge>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
//               >
//                 <Link href="/contact" passHref>
//                   <Button 
//                     size="lg" 
//                     className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
//                   >
//                     Let's Innovate Together
//                     <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//                   </Button>
//                 </Link>

//                 <Link href="/portfolio" passHref>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105"
//                   >
//                     View My Work
//                     <Eye className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Right Column: Image - Increased height */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="relative order-1 lg:order-2 w-full h-72 sm:h-80 md:h-[32rem] lg:h-[36rem]" // INCREASED HEIGHT
//             >
//               <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-white/10">
//                 <Image
//                   src={slides[currentSlide].image || "/placeholder.svg"}
//                   alt={slides[currentSlide].title}
//                   fill
//                   className="object-cover"
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 z-20">
//         {/* Previous Button */}
//         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={prevSlide}
//             className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-10 h-10 rounded-full"
//             disabled={isTransitioning}
//           >
//             <ChevronLeft className="w-5 h-5 text-white" />
//           </Button>
//         </motion.div>

//         {/* Slide Indicators */}
//         <div className="flex items-center gap-2">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="relative focus:outline-none"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               disabled={isTransitioning}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? "bg-white"
//                     : "bg-white/50 hover:bg-white/70"
//                 }`}
//               />
//               {index === currentSlide && (
//                 <motion.div
//                   layoutId="activeIndicator"
//                   className="absolute inset-0 rounded-full border-2 border-white"
//                   initial={false}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 30,
//                   }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>

//         {/* Next Button */}
//         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={nextSlide}
//             className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-10 h-10 rounded-full"
//             disabled={isTransitioning}
//           >
//             <ChevronRight className="w-5 h-5 text-white" />
//           </Button>
//         </motion.div>
//       </div>

//       {/* Progress Bar - At the very bottom of the slider */}
//       <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10 overflow-hidden">
//         <motion.div
//           key={currentSlide}
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
//           className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//         />
//       </div>

//       {/* Slide Counter - Top right */}
//       <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
//         <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2">
//           <span className="text-xs lg:text-sm font-medium text-white">
//             <span className="text-emerald-300">{currentSlide + 1}</span>
//             <span className="text-white/60"> / {slides.length}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }