
// "use client"

// import { motion } from "framer-motion"
// import { GraduationCap, Award, Heart, Target, Users, Lightbulb } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import NextImage from "next/image"
// import HeroSection from "@/components/HeroSection";
// import { FullWidthSection } from "@/components/full-width-section"

// const educationCards = [
//   {
//     title: "Bachelor's Degree in Software Development",
//     institution: "Brigham Young University – Idaho",
//     year: "In Progress",
//     status: "Current",
//     icon: GraduationCap,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     title: "Machine Learning Certification",
//     institution: "Coursera/Udemy",
//     year: "In Progress",
//     status: "Current",
//     icon: Award,
//     color: "bg-blue-50 border-blue-200",
//   },
//   {
//     title: "Database Design and Management",
//     institution: "Brigham Young University – Idaho",
//     year: "2024",
//     status: "Completed",
//     icon: Award,
//     color: "bg-purple-50 border-purple-200",
//   },
// ]

// const values = [
//   {
//     title: "Continuous Learning",
//     description:
//       "Staying at the forefront of technology through constant skill development and exploration of emerging trends.",
//     icon: Lightbulb,
//   },
//   {
//     title: "Client Collaboration",
//     description: "Building strong partnerships with clients through transparent communication and shared vision.",
//     icon: Users,
//   },
//   {
//     title: "Impactful Solutions",
//     description: "Creating technology solutions that make a meaningful difference in businesses and people's lives.",
//     icon: Target,
//   },
// ]

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />


//     <HeroSection
//       imageSrc="/images/slider/mobile.jpg"
//       imageAlt="About Section"
//       title={
//         <h1 className="text-4xl md:text-6xl text-slate-900 text-white mb-6">
//           About <span className="text-emerald-200">Alexander</span>
//       </h1>
//       }
//       subtitle="Passionate about creating technology that transforms ideas into reality"
//     />
    

//       {/* Professional Summary */}

//       <section className="py-20">
//       <div className="w-full px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative">
//                 {/* Replaced gradient background with image */}
//                 <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
//                   <img src="/images/slider/about.jpg" alt="Background" className="w-full h-full object-cover" />
//                   <div className="absolute w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
//                     <span className="text-1xl font-bold text-white">ASC</span>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
//                   <Heart className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Journey</h2>
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 I’m Alexander Sanchez Cyril, a passionate and results-driven Software Engineer with a strong 
//                 foundation in full-stack, backend, and desktop development, alongside hands-on expertise 
//                 in AI/ML, data analytics, and intelligent automation. With an academic background in Software 
//                 Development and a proven track record delivering impactful freelance projects, I specialize 
//                 in building scalable, cloud-ready applications that solve real-world problems.
//               </p>
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 My passion lies in creating seamless user experiences, automating workflows, and developing 
//                 AI-powered solutions that drive productivity and innovation. I believe in the transformative 
//                 power of technology and strive to deliver products that not only meet technical requirements 
//                 but also provide tangible value to users and businesses.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {["Problem Solver", "Tech Innovator", "Data Enthusiast", "Full-Stack Developer"].map((tag, index) => (
//                   <Badge key={index} className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1">
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>

      

//       {/* Educational Foundation */}
//       <FullWidthSection className="py-20 bg-slate-50">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Educational Foundation</h2>
//               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//                 Continuous learning and professional development drive my expertise
//               </p>
//             </motion.div>
      
//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//               {educationCards.map((card, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -10 }}
//                   className="group"
//                 >
//                   <Card className={`h-full ${card.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
//                     <CardContent className="p-8 text-center">
//                       <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
//                         {card.icon && <card.icon className="w-8 h-8 text-emerald-600" />}
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
//                       <p className="text-slate-600 mb-4">{card.institution}</p>
//                       <div className="flex items-center justify-center gap-2">
//                         <Badge
//                           variant={card.status === "Completed" ? "default" : "secondary"}
//                           className={card.status === "Completed" ? "bg-green-600 text-white" : "bg-emerald-600 text-white"}
//                         >
//                           {card.status}
//                         </Badge>
//                         <Badge variant="outline" className="border-emerald-600 text-emerald-600">
//                           {card.year}
//                         </Badge>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </FullWidthSection>
          
      
//       {/* Personal Philosophy */}

//       <section className="py-20">
//       <div className="w-full px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Values & Philosophy</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               The principles that guide my approach to technology and collaboration
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-center group"
//               >
//                 <div className="flex items-center justify-center w-20 h-20 bg-emerald-600 text-white rounded-full mb-6 mx-auto group-hover:bg-emerald-700 transition-colors duration-300">
//                   {value.icon && <value.icon className="w-10 h-10" />}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>

//       {/* <Footer /> */}
//       <WhatsAppFloat />
//     </div>
//   )
// }
































// "use client"

// import { motion } from "framer-motion"
// import { GraduationCap, Award, Target, Users, Lightbulb, ArrowUpRight, Sparkles, Zap, Star, Rocket, Heart, Code, Database, Cloud } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import HeroSection from "@/components/HeroSection"

// const educationCards = [
//   {
//     title: "Bachelor's Degree in Software Development",
//     institution: "Brigham Young University – Idaho",
//     year: "In Progress",
//     status: "Current",
//     icon: GraduationCap,
//     gradient: "from-emerald-500 to-teal-500",
//     glowColor: "group-hover:shadow-emerald-500/20",
//     bgGlow: "group-hover:bg-emerald-50",
//   },
//   {
//     title: "Machine Learning Certification",
//     institution: "Coursera/Udemy",
//     year: "In Progress",
//     status: "Current",
//     icon: Award,
//     gradient: "from-blue-500 to-indigo-500",
//     glowColor: "group-hover:shadow-blue-500/20",
//     bgGlow: "group-hover:bg-blue-50",
//   },
//   {
//     title: "Database Design and Management",
//     institution: "Brigham Young University – Idaho",
//     year: "2024",
//     status: "Completed",
//     icon: Award,
//     gradient: "from-purple-500 to-fuchsia-500",
//     glowColor: "group-hover:shadow-purple-500/20",
//     bgGlow: "group-hover:bg-purple-50",
//   },
// ]

// const values = [
//   {
//     title: "Continuous Learning",
//     description:
//       "Staying at the forefront of technology through constant skill development and exploration of emerging trends.",
//     icon: Lightbulb,
//     index: "01",
//     gradient: "from-amber-500 to-orange-500",
//   },
//   {
//     title: "Client Collaboration",
//     description: "Building strong partnerships with clients through transparent communication and shared vision.",
//     icon: Users,
//     index: "02",
//     gradient: "from-emerald-500 to-teal-500",
//   },
//   {
//     title: "Impactful Solutions",
//     description: "Creating technology solutions that make a meaningful difference in businesses and people's lives.",
//     icon: Target,
//     index: "03",
//     gradient: "from-rose-500 to-pink-500",
//   },
// ]

// const stats = [
//   { value: "2+", label: "Years Experience", icon: Zap },
//   { value: "8+", label: "Projects Delivered", icon: Star },
//   { value: "25+", label: "Technologies", icon: Code },
//   { value: "100%", label: "Client Satisfaction", icon: Heart },
// ]

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
//       <Navigation />

//       <HeroSection
//         imageSrc="/images/slider/mobile.jpg"
//         imageAlt="About Section"
//         title={
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
//             About <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">Alexander</span>
//           </h1>
//         }
//         subtitle="Passionate about creating technology that transforms ideas into reality"
//       />

//       {/* Professional Summary - Enhanced with parallax and floating elements */}
//       <section className="py-24 relative overflow-hidden bg-white">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
//           <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-30" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 opacity-20" />
//         </div>

//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
//             {/* Visual Column - Enhanced with glass morphism */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="lg:col-span-5 relative"
//             >
//               {/* Decorative Rings */}
//               <div className="absolute -top-12 -left-12 w-96 h-96 border-2 border-emerald-200/30 rounded-full animate-spin-slow pointer-events-none" />
//               <div className="absolute -bottom-12 -right-12 w-80 h-80 border-2 border-purple-200/30 rounded-full animate-spin-slow-reverse pointer-events-none" />
              
//               <div className="relative group rounded-3xl p-3 bg-gradient-to-br from-slate-100 to-white border border-slate-200/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
//                 <div className="w-full h-[450px] rounded-2xl overflow-hidden relative shadow-inner">
//                   <img 
//                     src="/images/slider/about.jpg" 
//                     alt="Alexander Sanchez Cyril" 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
//                   {/* Floating Badges */}
//                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
//                     <div className="w-2 h-2 rounded-full bg-emerald-500 absolute animate-pulse" />
//                     <span className="text-xs font-mono font-bold tracking-wider text-slate-800">ACTIVE</span>
//                   </div>
                  
//                   <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
//                     <span className="text-xs font-mono text-white/90">✦ 4+ Years Building</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Content Column - Enhanced with animations */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="lg:col-span-7 space-y-8"
//             >
//               {/* Stats Grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {stats.map((stat, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
//                   >
//                     <stat.icon className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
//                     <div className="text-2xl font-black text-slate-900">{stat.value}</div>
//                     <div className="text-xs text-slate-500">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
//                   <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Introduction</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//                   Professional <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
//                 </h2>
//               </div>
              
//               <div className="space-y-5">
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   I'm <strong className="text-slate-950 font-semibold">Alexander Sanchez Cyril</strong>, a passionate and results-driven Software Engineer with a strong 
//                   foundation in full-stack, backend, and desktop development, alongside hands-on expertise 
//                   in AI/ML, data analytics, and intelligent automation.
//                 </p>
                
//                 <div className="relative pl-4 border-l-2 border-emerald-400">
//                   <p className="text-lg text-slate-600 leading-relaxed italic">
//                     "Building scalable, cloud-ready applications that solve real-world problems and drive business growth."
//                   </p>
//                 </div>
                
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   My passion lies in creating seamless user experiences, automating workflows, and developing 
//                   AI-powered solutions that drive productivity and innovation.
//                 </p>
//               </div>
              
//               <div className="pt-4 flex flex-wrap gap-3">
//                 {["Problem Solver", "Tech Innovator", "Data Enthusiast", "Full-Stack Developer"].map((tag, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Badge 
//                       className="bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 px-4 py-2 text-xs font-medium tracking-wide rounded-full border-0 shadow-md cursor-pointer"
//                     >
//                       {tag}
//                     </Badge>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Educational Foundation - Enhanced with 3D cards */}
//       <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 opacity-40" />
//         </div>

//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16 space-y-4"
//           >
//             <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
//               <Sparkles className="w-4 h-4 text-emerald-600" />
//               <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Credentials</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//               Educational <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Foundation</span>
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Continuous academic learning and professional certifications driving engineering excellence.
//             </p>
//           </motion.div>
        
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {educationCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative"
//               >
//                 {/* 3D Glow Effect */}
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 ${card.glowColor}`} />
                
//                 <Card className={`relative h-full bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 ${card.glowColor} hover:shadow-2xl flex flex-col justify-between`}>
//                   {/* Top Gradient Bar */}
//                   <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
//                   <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
//                     <div className="w-full">
//                       {/* Animated Icon Container */}
//                       <motion.div 
//                         whileHover={{ rotate: 360 }}
//                         transition={{ duration: 0.6 }}
//                         className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                       >
//                         {card.icon && <card.icon className="w-6 h-6" />}
//                       </motion.div>
                      
//                       <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 leading-snug group-hover:text-emerald-600 transition-colors duration-200">
//                         {card.title}
//                       </h3>
//                       <p className="text-slate-500 text-sm font-medium mb-6">{card.institution}</p>
//                     </div>

//                     <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
//                       <Badge
//                         className={`${card.status === "Completed" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"} text-white font-semibold border-none px-3 py-1.5`}
//                       >
//                         {card.status}
//                       </Badge>
//                       <Badge variant="outline" className="border-slate-200 text-slate-600 font-mono text-xs bg-slate-50">
//                         {card.year}
//                       </Badge>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
        
//       {/* Personal Philosophy - Enhanced with animated cards */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         {/* Floating Particles */}
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-float"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20 space-y-4"
//           >
//             <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
//               <Heart className="w-4 h-4 text-rose-500" />
//               <span className="text-xs font-mono tracking-[0.2em] uppercase text-rose-600 font-bold">Values</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//               Core Values & <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Philosophy</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               The foundational pillars guiding my approach to technology architectural engineering and collaborative strategy.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative cursor-pointer"
//               >
//                 {/* Glass Card Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className="relative space-y-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 hover:border-transparent">
//                   {/* Structural Line Indicator */}
//                   <div className="flex items-center justify-between">
//                     <div className={`h-1 w-16 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-24 transition-all duration-500`} />
//                     <span className={`text-4xl font-mono font-black bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300`}>
//                       {value.index}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-start justify-between gap-4">
//                     <div className={`p-3 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {value.icon && <value.icon className="w-6 h-6" />}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 flex items-center gap-2">
//                     {value.title}
//                     <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
//                   </h3>
                  
//                   <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
//                     {value.description}
//                   </p>

//                   {/* Bottom Decorative Line */}
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner - New Addition */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-emerald-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>
        
//         <div className="relative z-10 text-center px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Build Something Amazing?</h3>
//             <p className="text-slate-300 mb-6">Let's collaborate and turn your ideas into reality</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
//             >
//               Let's Talk
//               <ArrowUpRight className="w-4 h-4" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       <WhatsAppFloat />

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
//         }
//         .animate-float {
//           animation: float ease-in-out infinite;
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         @keyframes spin-slow-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//         .animate-spin-slow-reverse {
//           animation: spin-slow-reverse 25s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }













































// "use client"

// import { motion } from "framer-motion"
// import { GraduationCap, Award, Target, Users, Lightbulb, ArrowUpRight, Sparkles, Zap, Star, Rocket, Heart, Code, Database, Cloud } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import HeroSection from "@/components/HeroSection"

// const educationCards = [
//   {
//     title: "Bachelor's Degree in Software Development",
//     institution: "Brigham Young University – Idaho",
//     year: "In Progress",
//     status: "Current",
//     icon: GraduationCap,
//     gradient: "from-emerald-500 to-teal-500",
//   },
//   {
//     title: "Machine Learning Certification",
//     institution: "Coursera/Udemy",
//     year: "In Progress",
//     status: "Current",
//     icon: Award,
//     gradient: "from-blue-500 to-indigo-500",
//   },
//   {
//     title: "Database Design and Management",
//     institution: "Brigham Young University – Idaho",
//     year: "2024",
//     status: "Completed",
//     icon: Award,
//     gradient: "from-purple-500 to-fuchsia-500",
//   },
// ]

// const values = [
//   {
//     title: "Continuous Learning",
//     description: "Staying at the forefront of technology through constant skill development and exploration of emerging trends.",
//     icon: Lightbulb,
//     index: "01",
//     gradient: "from-amber-500 to-orange-500",
//   },
//   {
//     title: "Client Collaboration",
//     description: "Building strong partnerships with clients through transparent communication and shared vision.",
//     icon: Users,
//     index: "02",
//     gradient: "from-emerald-500 to-teal-500",
//   },
//   {
//     title: "Impactful Solutions",
//     description: "Creating technology solutions that make a meaningful difference in businesses and people's lives.",
//     icon: Target,
//     index: "03",
//     gradient: "from-rose-500 to-pink-500",
//   },
// ]

// const stats = [
//   { value: "2+", label: "Years Experience", icon: Zap },
//   { value: "8+", label: "Projects Delivered", icon: Star },
//   { value: "25+", label: "Technologies", icon: Code },
//   { value: "100%", label: "Client Satisfaction", icon: Heart },
// ]

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
//       <Navigation />

//       <HeroSection
//         imageSrc="/images/slider/mobile.jpg"
//         imageAlt="About Section"
//         title={
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
//             About <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">Alexander</span>
//           </h1>
//         }
//         subtitle="Passionate about creating technology that transforms ideas into reality"
//       />

//       {/* Professional Summary - White Background */}
//       <section className="py-24 relative overflow-hidden bg-white">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
//           <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-30" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 opacity-20" />
//         </div>

//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="lg:col-span-5 relative"
//             >
//               <div className="absolute -top-12 -left-12 w-96 h-96 border-2 border-emerald-200/30 rounded-full animate-spin-slow pointer-events-none" />
//               <div className="absolute -bottom-12 -right-12 w-80 h-80 border-2 border-purple-200/30 rounded-full animate-spin-slow-reverse pointer-events-none" />
              
//               <div className="relative group rounded-3xl p-3 bg-gradient-to-br from-slate-100 to-white border border-slate-200/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
//                 <div className="w-full h-[450px] rounded-2xl overflow-hidden relative shadow-inner">
//                   <img 
//                     src="/images/slider/about.jpg" 
//                     alt="Alexander Sanchez Cyril" 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
//                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
//                     <div className="w-2 h-2 rounded-full bg-emerald-500 absolute animate-pulse" />
//                     <span className="text-xs font-mono font-bold tracking-wider text-slate-800">ACTIVE</span>
//                   </div>
                  
//                   <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
//                     <span className="text-xs font-mono text-white/90">✦ 4+ Years Building</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="lg:col-span-7 space-y-8"
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {stats.map((stat, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
//                   >
//                     <stat.icon className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
//                     <div className="text-2xl font-black text-slate-900">{stat.value}</div>
//                     <div className="text-xs text-slate-500">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
//                   <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Introduction</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//                   Professional <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
//                 </h2>
//               </div>
              
//               <div className="space-y-5">
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   I'm <strong className="text-slate-950 font-semibold">Alexander Sanchez Cyril</strong>, a passionate and results-driven Software Engineer with a strong 
//                   foundation in full-stack, backend, and desktop development, alongside hands-on expertise 
//                   in AI/ML, data analytics, and intelligent automation.
//                 </p>
                
//                 <div className="relative pl-4 border-l-2 border-emerald-400">
//                   <p className="text-lg text-slate-600 leading-relaxed italic">
//                     "Building scalable, cloud-ready applications that solve real-world problems and drive business growth."
//                   </p>
//                 </div>
                
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   My passion lies in creating seamless user experiences, automating workflows, and developing 
//                   AI-powered solutions that drive productivity and innovation.
//                 </p>
//               </div>
              
//               <div className="pt-4 flex flex-wrap gap-3">
//                 {["Problem Solver", "Tech Innovator", "Data Enthusiast", "Full-Stack Developer"].map((tag, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Badge 
//                       className="bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 px-4 py-2 text-xs font-medium tracking-wide rounded-full border-0 shadow-md cursor-pointer"
//                     >
//                       {tag}
//                     </Badge>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Educational Foundation - Full Width Dark Blue/Navy Theme */}
//       <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//         <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//           {/* Animated Background Elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
//             <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            
//             {/* Stars */}
//             {[...Array(50)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-white animate-twinkle"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   width: `${Math.random() * 2 + 1}px`,
//                   height: `${Math.random() * 2 + 1}px`,
//                   animationDelay: `${Math.random() * 5}s`,
//                   opacity: Math.random() * 0.5 + 0.2,
//                 }}
//               />
//             ))}
            
//             {/* Shooting Stars */}
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={`shooting-${i}`}
//                 className="absolute animate-shooting-star"
//                 style={{
//                   top: `${Math.random() * 50}%`,
//                   left: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 15}s`,
//                   animationDuration: `${1 + Math.random() * 2}s`,
//                 }}
//               >
//                 <div className="w-1 h-1 bg-white rounded-full" />
//                 <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
//               </div>
//             ))}
//           </div>

//           <div className="relative z-10 py-24">
//             <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-16 space-y-4"
//               >
//                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                   <Sparkles className="w-4 h-4 text-emerald-400" />
//                   <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-400 font-bold">Credentials</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
//                   Educational <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Foundation</span>
//                 </h2>
//                 <p className="text-lg text-slate-300 max-w-2xl mx-auto">
//                   Continuous academic learning and professional certifications driving engineering excellence.
//                 </p>
//               </motion.div>
            
//               <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {educationCards.map((card, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.15 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -8 }}
//                     className="group relative"
//                   >
//                     <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                    
//                     <Card className="relative h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between">
//                       <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                      
//                       <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
//                         <div className="w-full">
//                           <motion.div 
//                             whileHover={{ rotate: 360 }}
//                             transition={{ duration: 0.6 }}
//                             className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                           >
//                             {card.icon && <card.icon className="w-6 h-6" />}
//                           </motion.div>
                          
//                           <h3 className="text-xl font-bold text-white tracking-tight mb-2 leading-snug group-hover:text-emerald-300 transition-colors duration-200">
//                             {card.title}
//                           </h3>
//                           <p className="text-slate-300 text-sm font-medium mb-6">{card.institution}</p>
//                         </div>

//                         <div className="w-full flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
//                           <Badge
//                             className={`${card.status === "Completed" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"} text-white font-semibold border-none px-3 py-1.5`}
//                           >
//                             {card.status}
//                           </Badge>
//                           <Badge variant="outline" className="border-white/20 text-slate-300 font-mono text-xs bg-white/5">
//                             {card.year}
//                           </Badge>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
        
//       {/* Personal Philosophy - White Background */}
//       <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(12)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-float"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20 space-y-4"
//           >
//             <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
//               <Heart className="w-4 h-4 text-rose-500" />
//               <span className="text-xs font-mono tracking-[0.2em] uppercase text-rose-600 font-bold">Values</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//               Core Values & <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Philosophy</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               The foundational pillars guiding my approach to technology architectural engineering and collaborative strategy.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative cursor-pointer"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className="relative space-y-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 hover:border-transparent">
//                   <div className="flex items-center justify-between">
//                     <div className={`h-1 w-16 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-24 transition-all duration-500`} />
//                     <span className={`text-4xl font-mono font-black bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300`}>
//                       {value.index}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-start justify-between gap-4">
//                     <div className={`p-3 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {value.icon && <value.icon className="w-6 h-6" />}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 flex items-center gap-2">
//                     {value.title}
//                     <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
//                   </h3>
                  
//                   <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
//                     {value.description}
//                   </p>

//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner - Full Width Dark Gradient */}
//       <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//         <div className="relative w-full overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900">
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000" />
//           </div>
          
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-shooting-star"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 10}s`,
//                 animationDuration: `${1 + Math.random() * 2}s`,
//               }}
//             >
//               <div className="w-1 h-1 bg-white rounded-full" />
//               <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
//             </div>
//           ))}

//           <div className="relative z-10 py-16">
//             <div className="text-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
//                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Build Something Amazing?</h3>
//                 <p className="text-slate-300 mb-6">Let's collaborate and turn your ideas into reality</p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
//                 >
//                   Let's Talk
//                   <ArrowUpRight className="w-4 h-4" />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <WhatsAppFloat /> */}

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
//         }
//         .animate-float {
//           animation: float ease-in-out infinite;
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         @keyframes spin-slow-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
//         .animate-spin-slow-reverse {
//           animation: spin-slow-reverse 25s linear infinite;
//         }
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.8; }
//         }
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
//         @keyframes shooting-star {
//           0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
//           100% { transform: translateX(-300px) translateY(300px) rotate(45deg); opacity: 0; }
//         }
//         .animate-shooting-star {
//           animation: shooting-star 3s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }










































"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Target, Users, Lightbulb, ArrowUpRight, Sparkles, Zap, Star, Rocket, Heart, Code, Database, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import HeroSection from "@/components/HeroSection"
import Link from 'next/link'

const educationCards = [
  {
    title: "Bachelor of Science in Software Development",
    institution: "Brigham Young University – Idaho",
    year: "2026",
    status: "Graduated",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Web Development Certificate",
    institution: "Brigham Young University – Idaho",
    year: "2025",
    status: "Completed",
    icon: Award,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Web & Computer Programming Certificate",
    institution: "Brigham Young University – Idaho",
    year: "2024",
    status: "Completed",
    icon: Award,
    gradient: "from-purple-500 to-fuchsia-500",
  },
]

const values = [
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I continuously invest in expanding my expertise across software engineering, cloud infrastructure, distributed systems, and AI.",
    icon: Lightbulb,
    index: "01",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Engineering Excellence",
    description:
      "I prioritize clean architecture, maintainable code, automation, and scalable system design to deliver reliable production-ready software.",
    icon: Target,
    index: "02",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy transforming complex ideas and technical challenges into practical software solutions that create measurable value.",
    icon: Users,
    index: "03",
    gradient: "from-rose-500 to-pink-500",
  },
]

const stats = [
  { value: "3+", label: "Years Building Software", icon: Zap },
  { value: "8+", label: "Deployed Projects", icon: Star },
  { value: "4", label: "Engineering Specializations", icon: Code },
  { value: "End-to-End", label: "System Ownership", icon: Heart },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
      <Navigation />

      <HeroSection
        imageSrc="/images/slider/about-hero.jpg"
        imageAlt="About Section"
        title={
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            About <span className="text-emerald-300">Alexander</span>
          </h1>
        }
        subtitle="Building the scalable architectures, intelligent applications, and robust backend systems that turn complex ideas into reality"
      />

      {/* Professional Summary - White Background */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 opacity-20" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -top-12 -left-12 w-96 h-96 border-2 border-emerald-200/30 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-80 h-80 border-2 border-purple-200/30 rounded-full animate-spin-slow-reverse pointer-events-none" />
              
              <div className="relative group rounded-3xl p-3 bg-gradient-to-br from-slate-100 to-white border border-slate-200/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-full h-[450px] rounded-2xl overflow-hidden relative shadow-inner">
                  <img 
                    src="/images/slider/about.jpg" 
                    alt="Alexander Sanchez Cyril" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/50 shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500 absolute animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-800">OPEN TO OPPORTUNITIES</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                    <span className="text-xs font-mono text-white/90">✦ Full-Stack • Backend • AI</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <stat.icon className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Introduction</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                  Building Intelligent <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Software Systems</span>
                </h2>
              </div>
              
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm <strong className="text-slate-950 font-semibold">Alexander Sanchez Cyril</strong>, a Software Engineer specializing in full-stack development, backend engineering, and AI-powered systems.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  I design, build, and deploy production-grade applications ranging from scalable web platforms and backend APIs to intelligent agentic workflows and cloud-native solutions.
                </p>
                
                <div className="relative pl-4 border-l-2 border-emerald-400">
                  <p className="text-lg text-slate-600 leading-relaxed italic">
                    "Transforming ideas into reliable, scalable, and production-ready software."
                  </p>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  My experience spans modern web development, distributed systems, cloud deployment, Infrastructure as Code, CI/CD automation, and AI-powered applications. I enjoy solving complex engineering challenges while building software that delivers real-world value.
                </p>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-3">
                {["Software Engineer", "Backend Engineer", "AI Systems Developer", "Full-Stack Developer", "Cloud & DevOps", "System Design"].map((tag, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      className="bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 px-4 py-2 text-xs font-medium tracking-wide rounded-full border-0 shadow-md cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Foundation - Full Width Dark Blue/Navy Theme */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            
            {/* Stars */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
            
            {/* Shooting Stars */}
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
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              </div>
            ))}
          </div>

          <div className="relative z-10 py-24">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 space-y-4"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-400 font-bold">Credentials</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  Educational <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Foundation</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Continuous academic learning and professional certifications driving engineering excellence.
                </p>
              </motion.div>
            
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {educationCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                    
                    <Card className="relative h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                      
                      <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
                        <div className="w-full">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {card.icon && <card.icon className="w-6 h-6" />}
                          </motion.div>
                          
                          <h3 className="text-xl font-bold text-white tracking-tight mb-2 leading-snug group-hover:text-emerald-300 transition-colors duration-200">
                            {card.title}
                          </h3>
                          <p className="text-slate-300 text-sm font-medium mb-6">{card.institution}</p>
                        </div>

                        <div className="w-full flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                          <Badge
                            className={`${card.status === "Graduated" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"} text-white font-semibold border-none px-3 py-1.5`}
                          >
                            {card.status}
                          </Badge>
                          <Badge variant="outline" className="border-white/20 text-slate-300 font-mono text-xs bg-white/5">
                            {card.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        
      {/* Personal Philosophy - White Background */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-rose-600 font-bold">Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Core Values & <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The foundational pillars guiding my approach to technology architectural engineering and collaborative strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative space-y-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 hover:border-transparent">
                  <div className="flex items-center justify-between">
                    <div className={`h-1 w-16 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-24 transition-all duration-500`} />
                    <span className={`text-4xl font-mono font-black bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300`}>
                      {value.index}
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon && <value.icon className="w-6 h-6" />}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 flex items-center gap-2">
                    {value.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Full Width Dark Gradient */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-shooting-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
          ))}

          <div className="relative z-10 py-16">
            <div className="text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Build Something Amazing?</h3>
                <p className="text-slate-300 mb-6">Let's collaborate and turn your ideas into reality</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Link href="contact">Let's Talk</Link>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
          100% { transform: translateX(-300px) translateY(300px) rotate(45deg); opacity: 0; }
        }
        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }
      `}</style>
    </div>
  )
}