// "use client"

// import { useState, useEffect, useRef, useCallback } from "react"
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
// import { ArrowRight, Eye, Download } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// // ─── Slide data ───────────────────────────────────────────────────────────────
// const slides = [
//   {
//     id: 0,
//     eyebrow: "Full-Stack Development",
//     title: "Crafting\nDigital\nSolutions",
//     description:
//       "Building robust, scalable applications from concept to deployment with modern technologies.",
//     tags: ["Next.js", "Django", "Python", "React", "Node.js"],
//     image: "/images/slider/Digital-Solutions.jpg",
//     accent: "#10b981", // emerald
//     accentMuted: "rgba(16,185,129,0.12)",
//     showGreeting: true,
//   },
//   {
//     id: 1,
//     eyebrow: "Machine Learning & AI",
//     title: "Insights\nThrough\nData & AI",
//     description:
//       "Transforming raw data into intelligent, actionable insights with cutting-edge ML models.",
//     tags: ["AI", "ML", "Pandas", "NumPy", "Scikit-learn"],
//     image: "/images/slider/ML-AI.jpg",
//     accent: "#8b5cf6", // violet
//     accentMuted: "rgba(139,92,246,0.12)",
//   },
//   {
//     id: 2,
//     eyebrow: "Automation & Optimization",
//     title: "Optimizing\nProcesses,\nMaximizing\nEfficiency",
//     description:
//       "Streamlining workflows with intelligent automation — less friction, more output.",
//     tags: ["Automation", "Selenium", "Process Optimization"],
//     image: "/images/slider/task.jpg",
//     accent: "#f59e0b", // amber
//     accentMuted: "rgba(245,158,11,0.12)",
//   },
//   {
//     id: 3,
//     eyebrow: "Desktop App Development",
//     title: "Modern\nDesktop\nApplications",
//     description:
//       "Powerful cross-platform desktop applications built with Electron, React, and Django.",
//     tags: ["Electron", "Node", "Express", "React", "Django"],
//     image: "/images/slider/desktop.jpg",
//     accent: "#06b6d4", // cyan
//     accentMuted: "rgba(6,182,212,0.12)",
//   },
// ]

// const SLIDE_DURATION = 7000

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function ProgressRail({
//   total,
//   current,
//   duration,
//   onSelect,
//   accent,
// }: {
//   total: number
//   current: number
//   duration: number
//   onSelect: (i: number) => void
//   accent: string
// }) {
//   return (
//     <div className="flex flex-col gap-3">
//       {Array.from({ length: total }).map((_, i) => (
//         <button
//           key={i}
//           onClick={() => onSelect(i)}
//           aria-label={`Go to slide ${i + 1}`}
//           className="group flex items-center gap-3 text-left"
//         >
//           <div className="relative h-12 w-0.5 bg-white/20 overflow-hidden rounded-full">
//             {i === current && (
//               <motion.div
//                 className="absolute top-0 left-0 w-full rounded-full"
//                 style={{ backgroundColor: accent }}
//                 initial={{ height: "0%" }}
//                 animate={{ height: "100%" }}
//                 transition={{ duration: duration / 1000, ease: "linear" }}
//               />
//             )}
//             {i < current && (
//               <div className="absolute inset-0 rounded-full" style={{ backgroundColor: accent }} />
//             )}
//           </div>
//           <span
//             className="text-xs font-mono tracking-widest transition-colors duration-300"
//             style={{ color: i === current ? accent : "rgba(255,255,255,0.35)" }}
//           >
//             0{i + 1}
//           </span>
//         </button>
//       ))}
//     </div>
//   )
// }

// function Tag({ label, accent }: { label: string; accent: string }) {
//   return (
//     <span
//       className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide border"
//       style={{
//         color: accent,
//         borderColor: `${accent}40`,
//         backgroundColor: `${accent}14`,
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0)
//   const [paused, setPaused] = useState(false)
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

//   const slide = slides[current]

//   const goTo = useCallback((index: number) => {
//     setCurrent(index)
//     setPaused(false)
//   }, [])

//   const next = useCallback(() => {
//     setCurrent((p) => (p + 1) % slides.length)
//   }, [])

//   // Auto-advance
//   useEffect(() => {
//     if (paused) return
//     timerRef.current = setInterval(next, SLIDE_DURATION)
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current)
//     }
//   }, [paused, current, next])

//   return (
//     <section
//       className="relative min-h-screen w-full overflow-hidden bg-[#080c10] flex items-stretch"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* ── Background image layer ── */}
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={`bg-${current}`}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0, scale: 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.98 }}
//           transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title.replace(/\n/g, " ")}
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//           {/* Deep cinematic gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/85 to-[#080c10]/20" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 via-transparent to-transparent" />
//           {/* Accent color wash — subtle tint from slide accent */}
//           <motion.div
//             className="absolute inset-0"
//             style={{ backgroundColor: slide.accentMuted }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.4 }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* ── Layout ── */}
//       <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-between min-h-screen">

//         {/* Top bar */}
//         <div className="flex items-center justify-between">
//           <motion.div
//             animate={{ color: slide.accent }}
//             transition={{ duration: 0.6 }}
//             className="text-sm font-mono tracking-[0.2em] uppercase"
//           >
//             Alexander
//           </motion.div>
//           <div className="hidden md:flex items-center gap-6 text-xs text-white/30 font-mono tracking-widest">
//             <span>Portfolio</span>
//             <span
//               className="h-px w-16 inline-block"
//               style={{ backgroundColor: slide.accent, opacity: 0.4 }}
//             />
//             <span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
//           </div>
//         </div>

//         {/* Content area */}
//         <div className="flex-1 flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 w-full items-center">

//             {/* Left: text content */}
//             <div className="max-w-3xl">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`content-${current}`}
//                   initial={{ opacity: 0, y: 32 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -24 }}
//                   transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
//                 >
//                   {/* Eyebrow */}
//                   <div className="flex items-center gap-3 mb-6">
//                     <motion.span
//                       className="h-px w-8 block"
//                       style={{ backgroundColor: slide.accent }}
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                     />
//                     <span
//                       className="text-xs font-mono tracking-[0.25em] uppercase"
//                       style={{ color: slide.accent }}
//                     >
//                       {slide.eyebrow}
//                     </span>
//                   </div>

//                   {/* Greeting (slide 0 only) */}
//                   {slide.showGreeting && (
//                     <motion.p
//                       className="text-white/50 text-xl md:text-2xl font-light mb-2"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.15 }}
//                     >
//                       Hi, I&apos;m{" "}
//                       <span className="font-semibold" style={{ color: slide.accent }}>
//                         Alexander
//                       </span>
//                     </motion.p>
//                   )}

//                   {/* Title — large display type, line-broken */}
//                   <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.92] tracking-tight text-white mb-6">
//                     {slide.title.split("\n").map((line, i) => (
//                       <span key={i} className="block">
//                         {line}
//                       </span>
//                     ))}
//                   </h1>

//                   {/* Description */}
//                   <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-md">
//                     {slide.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-10">
//                     {slide.tags.map((tag) => (
//                       <Tag key={tag} label={tag} accent={slide.accent} />
//                     ))}
//                   </div>

//                   {/* CTAs */}
//                   <div className="flex flex-wrap gap-4">
//                     <Link href="/contact">
//                       <button
//                         className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
//                         style={{
//                           backgroundColor: slide.accent,
//                           color: "#fff",
//                         }}
//                       >
//                         Let&apos;s Innovate
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                       </button>
//                     </Link>
//                     <Link href="/portfolio">
//                       <button
//                         className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
//                       >
//                         <Eye className="w-4 h-4" />
//                         View Work
//                       </button>
//                     </Link>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Right: progress rail (desktop) */}
//             <div className="hidden lg:flex items-center">
//               <ProgressRail
//                 total={slides.length}
//                 current={current}
//                 duration={paused ? 999999 : SLIDE_DURATION}
//                 onSelect={goTo}
//                 accent={slide.accent}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar — mobile dots + slide eyebrow label */}
//         <div className="flex items-center justify-between">
//           {/* Mobile progress dots */}
//           <div className="flex lg:hidden gap-2">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goTo(i)}
//                 className="h-0.5 rounded-full transition-all duration-500"
//                 style={{
//                   width: i === current ? "2rem" : "0.5rem",
//                   backgroundColor: i === current ? slide.accent : "rgba(255,255,255,0.25)",
//                 }}
//                 aria-label={`Slide ${i + 1}`}
//               />
//             ))}
//           </div>

//           {/* Slide label */}
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={`label-${current}`}
//               className="text-xs text-white/25 font-mono tracking-widest hidden md:block"
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.4 }}
//             >
//               {slide.eyebrow.toUpperCase()}
//             </motion.p>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── Right edge vignette (image bleed area hint) ── */}
//       <div className="pointer-events-none absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-[#080c10]/30 to-transparent z-5" />
//     </section>
//   )
// }



































// "use client"

// import { useState, useEffect, useRef, useCallback } from "react"
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
// import { ArrowRight, Eye, Download } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// // ─── Slide data ───────────────────────────────────────────────────────────────
// // REMOVED \n line breaks so text flows horizontally across multiple words per line
// const slides = [
//   {
//     id: 0,
//     eyebrow: "Software Engineering",
//     title: "Building Production-Ready Software Systems",
//     description:
//       "Designing, developing, and deploying scalable applications across full-stack platforms, backend services, APIs, and cloud-native environments.",
//     tags: [
//       "System Design",
//       "Full-Stack",
//       "Backend",
//       "APIs",
//       "PostgreSQL",
//     ],
//     image: "/images/slider/Digital-Solutions.jpg",
//     accent: "#10b981",
//     accentMuted: "rgba(16,185,129,0.12)",
//     showGreeting: true,
//   },

//   {
//     id: 1,
//     eyebrow: "AI & Agentic Systems",
//     title: "Intelligent Applications Beyond Chatbots",
//     description:
//       "Building AI-powered systems using LangGraph, LangChain, LlamaIndex, RAG, MCP, and autonomous tool-calling workflows.",
//     tags: [
//       "LangGraph",
//       "LangChain",
//       "LlamaIndex",
//       "RAG",
//       "MCP",
//     ],
//     image: "/images/slider/ML-AI.jpg",
//     accent: "#8b5cf6",
//     accentMuted: "rgba(139,92,246,0.12)",
//   },

//   {
//     id: 2,
//     eyebrow: "Backend & Distributed Systems",
//     title: "Scalable APIs and Reliable Architectures",
//     description:
//       "Designing API-first backend systems with authentication, event-driven communication, caching, and modern distributed architecture patterns.",
//     tags: [
//       "Node.js",
//       "FastAPI",
//       "Kafka",
//       "Redis",
//       "Microservices",
//     ],
//     image: "/images/slider/task.jpg",
//     accent: "#f59e0b",
//     accentMuted: "rgba(245,158,11,0.12)",
//   },

//   {
//     id: 3,
//     eyebrow: "Cloud, DevOps & Infrastructure",
//     title: "Automated Deployments and Cloud-Native Delivery",
//     description:
//       "Containerizing applications, building CI/CD pipelines, and managing infrastructure with Docker, GitHub Actions, and Terraform.",
//     tags: [
//       "Docker",
//       "CI/CD",
//       "Terraform",
//       "AWS",
//       "GitHub Actions",
//     ],
//     image: "/images/slider/desktop.jpg",
//     accent: "#06b6d4",
//     accentMuted: "rgba(6,182,212,0.12)",
//   },
// ];

// const SLIDE_DURATION = 7000

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function ProgressRail({
//   total,
//   current,
//   duration,
//   onSelect,
//   accent,
// }: {
//   total: number
//   current: number
//   duration: number
//   onSelect: (i: number) => void
//   accent: string
// }) {
//   return (
//     <div className="flex flex-col gap-3">
//       {Array.from({ length: total }).map((_, i) => (
//         <button
//           key={i}
//           onClick={() => onSelect(i)}
//           aria-label={`Go to slide ${i + 1}`}
//           className="group flex items-center gap-3 text-left"
//         >
//           <div className="relative h-12 w-0.5 bg-white/20 overflow-hidden rounded-full">
//             {i === current && (
//               <motion.div
//                 className="absolute top-0 left-0 w-full rounded-full"
//                 style={{ backgroundColor: accent }}
//                 initial={{ height: "0%" }}
//                 animate={{ height: "100%" }}
//                 transition={{ duration: duration / 1000, ease: "linear" }}
//               />
//             )}
//             {i < current && (
//               <div className="absolute inset-0 rounded-full" style={{ backgroundColor: accent }} />
//             )}
//           </div>
//           <span
//             className="text-xs font-mono tracking-widest transition-colors duration-300"
//             style={{ color: i === current ? accent : "rgba(255,255,255,0.35)" }}
//           >
//             0{i + 1}
//           </span>
//         </button>
//       ))}
//     </div>
//   )
// }

// function Tag({ label, accent }: { label: string; accent: string }) {
//   return (
//     <span
//       className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide border"
//       style={{
//         color: accent,
//         borderColor: `${accent}40`,
//         backgroundColor: `${accent}14`,
//       }}
//     >
//       {label}
//     </span>
//   )
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0)
//   const [paused, setPaused] = useState(false)
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

//   const slide = slides[current]

//   const goTo = useCallback((index: number) => {
//     setCurrent(index)
//     setPaused(false)
//   }, [])

//   const next = useCallback(() => {
//     setCurrent((p) => (p + 1) % slides.length)
//   }, [])

//   // Auto-advance
//   useEffect(() => {
//     if (paused) return
//     timerRef.current = setInterval(next, SLIDE_DURATION)
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current)
//     }
//   }, [paused, current, next])

//   return (
//     <section
//       className="relative min-h-screen w-full overflow-hidden bg-[#080c10] flex items-stretch"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* ── Background image layer ── */}
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={`bg-${current}`}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0, scale: 1.04 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.98 }}
//           transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title.replace(/\n/g, " ")}
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//           {/* Deep cinematic gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/85 to-[#080c10]/20" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 via-transparent to-transparent" />
//           {/* Accent color wash — subtle tint from slide accent */}
//           <motion.div
//             className="absolute inset-0"
//             style={{ backgroundColor: slide.accentMuted }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.4 }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* ── Layout ── */}
//       <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-between min-h-screen">

//         {/* Top bar */}
//         <div className="flex items-center justify-between">
//           <motion.div
//             animate={{ color: slide.accent }}
//             transition={{ duration: 0.6 }}
//             className="text-sm font-mono tracking-[0.2em] uppercase"
//           >
//             Alexander
//           </motion.div>
//           <div className="hidden md:flex items-center gap-6 text-xs text-white/30 font-mono tracking-widest">
//             <span>Portfolio</span>
//             <span
//               className="h-px w-16 inline-block"
//               style={{ backgroundColor: slide.accent, opacity: 0.4 }}
//             />
//             <span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
//           </div>
//         </div>

//         {/* Content area */}
//         <div className="flex-1 flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 w-full items-center">

//             {/* Left: text content - WIDENED CONTAINER */}
//             <div className="max-w-4xl min-w-0 w-full">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`content-${current}`}
//                   initial={{ opacity: 0, y: 32 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -24 }}
//                   transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
//                 >
//                   {/* Eyebrow */}
//                   <div className="flex items-center gap-3 mb-6">
//                     <motion.span
//                       className="h-px w-8 block"
//                       style={{ backgroundColor: slide.accent }}
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                     />
//                     <span
//                       className="text-xs font-mono tracking-[0.25em] uppercase"
//                       style={{ color: slide.accent }}
//                     >
//                       {slide.eyebrow}
//                     </span>
//                   </div>

//                   {/* Greeting (slide 0 only) */}
//                   {slide.showGreeting && (
//                     <motion.p
//                       className="text-white/50 text-xl md:text-2xl font-light mb-2"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.15 }}
//                     >
//                       Hi, I&apos;m{" "}
//                       <span className="font-semibold" style={{ color: slide.accent }}>
//                         Alexander
//                       </span>
//                     </motion.p>
//                   )}

//                   {/* Title — NOW DISPLAYS HORIZONTALLY with proper line wrapping */}
//                   <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-tight text-white mb-6 max-w-full">
//                     {slide.title}
//                   </h1>

//                   {/* Description */}
//                   <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
//                     {slide.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-10">
//                     {slide.tags.map((tag) => (
//                       <Tag key={tag} label={tag} accent={slide.accent} />
//                     ))}
//                   </div>

//                   {/* CTAs */}
//                   <div className="flex flex-wrap gap-4">
//                     <Link href="/contact">
//                       <button
//                         className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
//                         style={{
//                           backgroundColor: slide.accent,
//                           color: "#fff",
//                         }}
//                       >
//                         Let&apos;s Innovate
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                       </button>
//                     </Link>
//                     <Link href="/portfolio">
//                       <button
//                         className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
//                       >
//                         <Eye className="w-4 h-4" />
//                         View Work
//                       </button>
//                     </Link>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Right: progress rail (desktop) */}
//             <div className="hidden lg:flex items-center">
//               <ProgressRail
//                 total={slides.length}
//                 current={current}
//                 duration={paused ? 999999 : SLIDE_DURATION}
//                 onSelect={goTo}
//                 accent={slide.accent}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar — mobile dots + slide eyebrow label */}
//         <div className="flex items-center justify-between">
//           {/* Mobile progress dots */}
//           <div className="flex lg:hidden gap-2">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goTo(i)}
//                 className="h-0.5 rounded-full transition-all duration-500"
//                 style={{
//                   width: i === current ? "2rem" : "0.5rem",
//                   backgroundColor: i === current ? slide.accent : "rgba(255,255,255,0.25)",
//                 }}
//                 aria-label={`Slide ${i + 1}`}
//               />
//             ))}
//           </div>

//           {/* Slide label */}
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={`label-${current}`}
//               className="text-xs text-white/25 font-mono tracking-widest hidden md:block"
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.4 }}
//             >
//               {slide.eyebrow.toUpperCase()}
//             </motion.p>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── Right edge vignette (image bleed area hint) ── */}
//       <div className="pointer-events-none absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-[#080c10]/30 to-transparent z-5" />
//     </section>
//   )
// }



































"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ─── Slide data ───────────────────────────────────────────────────────────────
const slides = [
  {
    id: 0,
    eyebrow: "Software Engineering",
    title: "Building Production-Ready Software Systems",
    description:
      "Designing, developing, and deploying scalable applications across full-stack platforms, backend services, APIs, and cloud-native environments.",
    tags: [
      "System Design",
      "Full-Stack",
      "Backend",
      "APIs",
      "PostgreSQL",
    ],
    image: "/images/slider/Digital-Solutions.png",
    accent: "#10b981",
    accentMuted: "rgba(16,185,129,0.12)",
    showGreeting: true,
  },

  {
    id: 1,
    eyebrow: "AI & Agentic Systems",
    title: "Intelligent Applications Beyond Chatbots",
    description:
      "Building AI-powered systems using LangGraph, LangChain, LlamaIndex, RAG, MCP, and autonomous tool-calling workflows.",
    tags: [
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "MCP",
    ],
    image: "/images/slider/ML-AI.jpg",
    accent: "#8b5cf6",
    accentMuted: "rgba(139,92,246,0.12)",
  },

  {
    id: 2,
    eyebrow: "Backend & Distributed Systems",
    title: "Scalable APIs and Reliable Architectures",
    description:
      "Designing API-first backend systems with authentication, event-driven communication, caching, and modern distributed architecture patterns.",
    tags: [
      "Node.js",
      "FastAPI",
      "RabbitMQ",
      "Kafka",
      "Redis",
      "Microservices",
    ],
    image: "/images/slider/task2.jpg",
    accent: "#f59e0b",
    accentMuted: "rgba(245,158,11,0.12)",
  },

  {
    id: 3,
    eyebrow: "Cloud, DevOps & Infrastructure",
    title: "Automated Deployments and Cloud-Native Delivery",
    description:
      "Containerizing applications, building CI/CD pipelines, and managing infrastructure with Docker, GitHub Actions, and Terraform.",
    tags: [
      "Docker",
      "CI/CD",
      "Terraform",
      "AWS",
      "GitHub Actions",
    ],
    image: "/images/slider/devup2.png",
    accent: "#06b6d4",
    accentMuted: "rgba(6,182,212,0.12)",
  },
];

const SLIDE_DURATION = 7000

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressRail({
  total,
  current,
  duration,
  onSelect,
  accent,
}: {
  total: number
  current: number
  duration: number
  onSelect: (i: number) => void
  accent: string
}) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="group flex items-center gap-3 text-left"
        >
          <div className="relative h-12 w-0.5 bg-white/20 overflow-hidden rounded-full">
            {i === current && (
              <motion.div
                className="absolute top-0 left-0 w-full rounded-full"
                style={{ backgroundColor: accent }}
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            )}
            {i < current && (
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: accent }} />
            )}
          </div>
          <span
            className="text-xs font-mono tracking-widest transition-colors duration-300"
            style={{ color: i === current ? accent : "rgba(255,255,255,0.35)" }}
          >
            0{i + 1}
          </span>
        </button>
      ))}
    </div>
  )
}

function Tag({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide border"
      style={{
        color: accent,
        borderColor: `${accent}40`,
        backgroundColor: `${accent}14`,
      }}
    >
      {label}
    </span>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const slide = slides[current]

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    setPaused(false)
  }, [])

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, SLIDE_DURATION)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, current, next])

  return (
    <section
      className="relative min-h-screen w-screen overflow-hidden bg-[#080c10] flex items-stretch"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background image layer ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Deep cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/85 to-[#080c10]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 via-transparent to-transparent" />
          {/* Accent color wash — subtle tint from slide accent */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: slide.accentMuted }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Layout - FULL WIDTH with no constraints ── */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-between min-h-screen">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <motion.div
            animate={{ color: slide.accent }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono tracking-[0.2em] uppercase"
          >
            Alexander
          </motion.div>
          <div className="hidden md:flex items-center gap-6 text-xs text-white/30 font-mono tracking-widest">
            <span>Portfolio</span>
            <span
              className="h-px w-16 inline-block"
              style={{ backgroundColor: slide.accent, opacity: 0.4 }}
            />
            <span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 w-full items-center">

            {/* Left: text content */}
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span
                      className="h-px w-8 block"
                      style={{ backgroundColor: slide.accent }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <span
                      className="text-xs font-mono tracking-[0.25em] uppercase"
                      style={{ color: slide.accent }}
                    >
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Greeting (slide 0 only) */}
                  {slide.showGreeting && (
                    <motion.p
                      className="text-white/50 text-xl md:text-2xl font-light mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      Hi, I&apos;m{" "}
                      <span className="font-semibold" style={{ color: slide.accent }}>
                        Alexander
                      </span>
                    </motion.p>
                  )}

                  {/* Title - natural sentence flow with proper line wrapping */}
                  <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] tracking-tight text-white mb-6">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                    {slide.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {slide.tags.map((tag) => (
                      <Tag key={tag} label={tag} accent={slide.accent} />
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <button
                        className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                        style={{
                          backgroundColor: slide.accent,
                          color: "#fff",
                        }}
                      >
                        Let&apos;s Innovate
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </Link>
                    <Link href="/portfolio">
                      <button
                        className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                      >
                        <Eye className="w-4 h-4" />
                        View Work
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: progress rail (desktop) */}
            <div className="hidden lg:flex items-center">
              <ProgressRail
                total={slides.length}
                current={current}
                duration={paused ? 999999 : SLIDE_DURATION}
                onSelect={goTo}
                accent={slide.accent}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar — mobile dots + slide eyebrow label */}
        <div className="flex items-center justify-between">
          {/* Mobile progress dots */}
          <div className="flex lg:hidden gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-0.5 rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "2rem" : "0.5rem",
                  backgroundColor: i === current ? slide.accent : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${current}`}
              className="text-xs text-white/25 font-mono tracking-widest hidden md:block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {slide.eyebrow.toUpperCase()}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Right edge vignette (image bleed area hint) ── */}
      <div className="pointer-events-none absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-[#080c10]/30 to-transparent z-5" />
    </section>
  )
}