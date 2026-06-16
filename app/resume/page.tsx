// "use client"

// import { motion } from "framer-motion"
// import { Download, Eye, Code, Database, Brain, Settings, Award, GraduationCap } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import HeroSection from "@/components/HeroSection";
// import Link from 'next/link';
// import { FullWidthSection } from "@/components/full-width-section"


// const technicalSkills = [
//   {
//     category: "Full-Stack Development",
//     skills: ["C# (ASP.NET Core)", "Python (Django, FastAPI)", "JavaScript/TypeScript (Node.js, Express.js, Next.js, React)", "Tailwind CSS"],
//     icon: Code,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     category: "Backend & Databases",
//     skills: ["REST API Development", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis (caching & message brokering)"],
//     icon: Database,
//     color: "bg-green-50 border-green-200",
//   },
//   {
//     category: "Machine Learning & AI",
//     skills: ["Machine Learning & Deep Learning", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV (computer vision)", "NLP (NLTK, Hugging Face, Transformers)", "LLMs (Large Language Models)"],
//     icon: Brain,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     category: "Data Analysis & Manipulation",
//     skills: ["Pandas", "NumPy", "Excel", "Google Sheets"],
//     icon: Settings,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     category: "Web Scraping & Automation",
//     skills: ["Selenium", "BeautifulSoup", "Playwright", "Scrapy", "Custom automation scripts (Python)", "Task orchestration with Celery", "Intelligent Web Scrapers (AI-powered)"],
//     icon: Settings,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     category: "Data Visualization",
//     skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
//     icon: Settings,
//     color: "bg-emerald-50 border-emerald-200",
//   },
//   {
//     category: "Version Control & Collaboration",
//     skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Trello", "Jira", "Trello", "Asana", "CI/CD Pipelines (GitHub Actions, Jenkins)"],
//     icon: Settings,
//     color: "bg-emerald-50 border-emerald-200",
//   },
  
// ]

// const mainExpertise = [
//   "Software Development (Backend and Frontend)",
//   "Machine Learning and AI",
//   "Task Automation",
//   "Data Analysis",
//   "Data Scraping",
//   "Database Development",
// ]

// const education = [
//   {
//     degree: "Bachelor's Degree in Software Development",
//     institution: "Brigham Young University – Idaho",
//     status: "In Progress",
//     year: "2026",
//     icon: GraduationCap,
//   },
//   // {
//   //   degree: "Applied Associate Degree in Software Development",
//   //   institution: "Brigham Young University – Idaho",
//   //   status: "In Progress",
//   //   year: "2026",
//   //   icon: Award,
//   // },
//   {
//     degree: "Machine Learning Certification",
//     institution: "Coursera/Udemy",
//     status: "In Progress",
//     year: "2026",
//     icon: Award,
//   },
//   // {
//   //   degree: "Database Design and Management",
//   //   institution: "Brigham Young University – Idaho",
//   //   status: "Completed",
//   //   year: "2024",
//   //   icon: Award,
//   // },
//    {
//     degree: "Certificate in Web and Computer Programming",
//     institution: "Brigham Young University – Idaho",
//     status: "Completed",
//     year: "2024",
//     icon: Award,
//   },
//   {
//     degree: "Certificate in Web Development",
//     institution: "Brigham Young University – Idaho",
//     status: "Completed",
//     year: "2023",
//     icon: Award,
//   },
// ]

// export default function ResumePage() {
//   const handleViewResume = () => {
//     // This would open the PDF resume in a new tab or embedded viewer
//     window.open("/resume.pdf", "_blank")
//   }

//   const handleDownloadResume = () => {
//     // This would trigger a download of the resume PDF
//     const link = document.createElement("a")
//     link.href = "/resume.pdf"
//     link.download = "Alexander_Cyril_Resume.pdf"
//     link.click()
//   }

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//         <HeroSection
//           imageSrc="/images/slider/Resume1.jpg"
//           imageAlt="Services Section"
//             title={
//               <h1 className="text-4xl md:text-6xl text-white mb-6">
//                 Professional <span className="text-emerald-300">Resume</span>
//                 </h1>
//               }
//                 subtitle="Comprehensive overview of my technical expertise and professional qualifications"
//           />

//       {/* Hero Section */}
//       <FullWidthSection
//   backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100" // ⭐ Moved the gradient here ⭐
//   className="py-4 md:py-4 relative z-10 h-full flex items-center" // ⭐ Kept content-specific classes here ⭐
// >
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 onClick={handleViewResume}
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
//               >
//                 <Eye className="mr-2 w-5 h-5" />
//                 View Resume
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 onClick={handleDownloadResume}
//                 className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
//               >
//                 <Download className="mr-2 w-5 h-5" />
//                 Download Resume
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </FullWidthSection>



//       {/* Technical Expertise */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Comprehensive skill set across modern technologies and frameworks
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {technicalSkills.map((skillGroup, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group"
//               >
//                 <Card
//                   className={`h-full ${skillGroup.color} border-2 transition-all duration-300 group-hover:shadow-xl`}
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <skillGroup.icon className="w-8 h-8 text-emerald-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{skillGroup.category}</h3>
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {skillGroup.skills.map((skill, skillIndex) => (
//                         <Badge
//                           key={skillIndex}
//                           className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm px-3 py-1"
//                         >
//                           {skill}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Expertise */}
//       <FullWidthSection className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Primary areas of expertise and specialization</p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-6">
//               {mainExpertise.map((expertise, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300"
//                 >
//                   <div className="w-3 h-3 bg-emerald-600 rounded-full flex-shrink-0"></div>
//                   <span className="text-slate-700 font-medium">{expertise}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </FullWidthSection>

//       {/* Education & Certifications */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Academic background and professional certifications
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-6">
//               {education.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="group"
//                 >
//                   <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 group-hover:shadow-lg">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
//                           <item.icon className="w-6 h-6 text-emerald-600" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
//                             <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
//                             <div className="flex gap-2 mt-2 sm:mt-0">
//                               <Badge
//                                 variant={item.status === "Completed" ? "default" : "secondary"}
//                                 className={
//                                   item.status === "Completed" ? "bg-green-600 text-white" : "bg-gray-600 text-white"
//                                 }
//                               >
//                                 {item.status}
//                               </Badge>
//                               <Badge variant="outline" className="border-emerald-600 text-emerald-600">
//                                 {item.year}
//                               </Badge>
//                             </div>
//                           </div>
//                           <p className="text-slate-600">{item.institution}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resume Actions */}
//       <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
//             <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
//               Download my complete resume or get in touch to discuss how my skills can contribute to your next project.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 onClick={handleDownloadResume}
//                 className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3"
//               >
//                 <Download className="mr-2 w-5 h-5" />
//                 Download Full Resume
//               </Button>

//               <Link href="/contact" passHref>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
//               >
//                 Let's Innovate Together
//               </Button>
//               </Link>

//             </div>
//           </motion.div>
//         </div>
//       </FullWidthSection>

//       {/* <Footer /> */}
//       <WhatsAppFloat />
//     </div>
//   )
// }































// "use client"

// import { motion } from "framer-motion"
// import { Download, Eye, Code, Database, Brain, Settings, Award, GraduationCap, Sparkles, Star, Rocket, CheckCircle, Briefcase, Layers, Cpu, Cloud, Shield } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import HeroSection from "@/components/HeroSection";
// import Link from 'next/link';

// const technicalSkills = [
//   {
//     category: "Full-Stack Development",
//     skills: ["C# (ASP.NET Core)", "Python (Django, FastAPI)", "JavaScript/TypeScript", "Node.js, Express.js", "Next.js, React", "Tailwind CSS"],
//     icon: Code,
//     gradient: "from-emerald-500 to-teal-500",
//     bgGradient: "from-emerald-50 to-teal-50",
//   },
//   {
//     category: "Backend & Databases",
//     skills: ["REST API Development", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis (caching & brokering)"],
//     icon: Database,
//     gradient: "from-blue-500 to-cyan-500",
//     bgGradient: "from-blue-50 to-cyan-50",
//   },
//   {
//     category: "Machine Learning & AI",
//     skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NLP (NLTK, Hugging Face)", "LLMs & Transformers"],
//     icon: Brain,
//     gradient: "from-purple-500 to-indigo-500",
//     bgGradient: "from-purple-50 to-indigo-50",
//   },
//   {
//     category: "Data Analysis & Visualization",
//     skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
//     icon: Settings,
//     gradient: "from-orange-500 to-red-500",
//     bgGradient: "from-orange-50 to-red-50",
//   },
//   {
//     category: "Web Scraping & Automation",
//     skills: ["Selenium", "BeautifulSoup", "Playwright", "Scrapy", "Celery", "AI-powered scrapers"],
//     icon: Cpu,
//     gradient: "from-rose-500 to-pink-500",
//     bgGradient: "from-rose-50 to-pink-50",
//   },
//   {
//     category: "DevOps & Cloud",
//     skills: ["Git & GitHub", "CI/CD Pipelines", "Docker", "GitHub Actions", "Jenkins", "Cloud Deployment"],
//     icon: Cloud,
//     gradient: "from-cyan-500 to-blue-500",
//     bgGradient: "from-cyan-50 to-blue-50",
//   },
// ]

// const mainExpertise = [
//   "Software Development (Backend & Frontend)",
//   "Machine Learning & AI Integration",
//   "Intelligent Task Automation",
//   "Data Analysis & Visualization",
//   "Web Scraping at Scale",
//   "Database Architecture & Optimization",
// ]

// const education = [
//   {
//     degree: "Bachelor of Science in Software Development",
//     institution: "Brigham Young University – Idaho",
//     status: "Graduated",
//     year: "2026",
//     icon: GraduationCap,
//     gradient: "from-emerald-500 to-teal-500",
//   },
//   {
//     degree: "Machine Learning Certification",
//     institution: "Coursera/Udemy",
//     status: "Completed",
//     year: "2026",
//     icon: Award,
//     gradient: "from-blue-500 to-indigo-500",
//   },
//   {
//     degree: "Certificate in Web and Computer Programming",
//     institution: "Brigham Young University – Idaho",
//     status: "Completed",
//     year: "2024",
//     icon: Award,
//     gradient: "from-purple-500 to-fuchsia-500",
//   },
//   {
//     degree: "Certificate in Web Development",
//     institution: "Brigham Young University – Idaho",
//     status: "Completed",
//     year: "2023",
//     icon: Award,
//     gradient: "from-amber-500 to-orange-500",
//   },
// ]

// export default function ResumePage() {
//   const handleViewResume = () => {
//     window.open("/resume.pdf", "_blank")
//   }

//   const handleDownloadResume = () => {
//     const link = document.createElement("a")
//     link.href = "/resume.pdf"
//     link.download = "Alexander_Cyril_Resume.pdf"
//     link.click()
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
//       <Navigation />

//       {/* Hero Section */}
//       <HeroSection
//         imageSrc="/images/slider/Resume1.jpg"
//         imageAlt="Resume Section"
//         title={
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
//             Professional <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">Resume</span>
//           </h1>
//         }
//         subtitle="Comprehensive overview of my technical expertise and professional qualifications"
//       />

//       {/* Quick Actions Bar */}
//       <div className="relative -mt-10 z-20">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row gap-4 justify-center border border-slate-100"
//           >
//             <Button
//               size="lg"
//               onClick={handleViewResume}
//               className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <Eye className="mr-2 w-5 h-5" />
//               View Resume
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={handleDownloadResume}
//               className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 px-8 py-3 rounded-xl transition-all duration-300"
//             >
//               <Download className="mr-2 w-5 h-5" />
//               Download Resume
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Technical Expertise - Modern Glass Cards */}
//       <section className="py-24 relative overflow-hidden bg-white">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" />
//           <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-30" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 opacity-20" />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16 space-y-4"
//           >
//             <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
//               <Sparkles className="w-4 h-4 text-emerald-600" />
//               <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Skills</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//               Technical <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Expertise</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Comprehensive skill set across modern technologies and frameworks
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {technicalSkills.map((skillGroup, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative"
//               >
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillGroup.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500`} />
                
//                 <Card className={`relative h-full bg-gradient-to-br ${skillGroup.bgGradient} border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
//                   <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
//                   <CardContent className="p-6 text-center">
//                     <div className="relative w-16 h-16 mx-auto mb-4">
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
//                       <div className={`relative flex items-center justify-center w-full h-full bg-gradient-to-br ${skillGroup.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                         <skillGroup.icon className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
                    
//                     <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
//                       {skillGroup.category}
//                     </h3>
                    
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {skillGroup.skills.map((skill, skillIndex) => (
//                         <motion.div
//                           key={skillIndex}
//                           whileHover={{ scale: 1.05 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <Badge className="bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border-slate-200 text-xs px-3 py-1.5 shadow-sm">
//                             {skill}
//                           </Badge>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Competencies - Dark Theme */}
//       <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//         <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
//             <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            
//             {[...Array(30)].map((_, i) => (
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
//           </div>

//           <div className="relative z-10 py-24">
//             <div className="container mx-auto px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-16 space-y-4"
//               >
//                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                   <Star className="w-4 h-4 text-emerald-400" />
//                   <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-400 font-bold">Strengths</span>
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
//                   Core <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Competencies</span>
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
//                 <p className="text-lg text-slate-300 max-w-2xl mx-auto">
//                   Primary areas of expertise and specialization
//                 </p>
//               </motion.div>

//               <div className="max-w-5xl mx-auto">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {mainExpertise.map((expertise, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       whileHover={{ x: 5 }}
//                       className="group"
//                     >
//                       <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-emerald-400/50 transition-all duration-300">
//                         <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors duration-300">
//                           <CheckCircle className="w-4 h-4 text-emerald-400" />
//                         </div>
//                         <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
//                           {expertise}
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Education & Certifications */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(8)].map((_, i) => (
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

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16 space-y-4"
//           >
//             <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
//               <GraduationCap className="w-4 h-4 text-purple-600" />
//               <span className="text-xs font-mono tracking-[0.2em] uppercase text-purple-600 font-bold">Education</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
//               Education & <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Certifications</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full" />
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Academic background and professional certifications
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-4">
//               {education.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 8 }}
//                   className="group relative"
//                 >
//                   <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`} />
                  
//                   <Card className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                           <item.icon className="w-6 h-6" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
//                             <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
//                               {item.degree}
//                             </h3>
//                             <div className="flex gap-2">
//                               <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-none px-3 py-1`}>
//                                 {item.status}
//                               </Badge>
//                               <Badge variant="outline" className="border-slate-200 text-slate-600 font-mono">
//                                 {item.year}
//                               </Badge>
//                             </div>
//                           </div>
//                           <p className="text-slate-500">{item.institution}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resume Actions - CTA */}
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

//           <div className="relative z-10 py-24">
//             <div className="container mx-auto px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center max-w-4xl mx-auto"
//               >
//                 <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
//                   Ready to <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Collaborate?</span>
//                 </h2>
//                 <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
//                   Download my complete resume or get in touch to discuss how my skills can contribute to your next project.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button
//                     size="lg"
//                     onClick={handleDownloadResume}
//                     className="bg-white text-emerald-700 hover:bg-slate-100 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <Download className="mr-2 w-5 h-5" />
//                     Download Full Resume
//                   </Button>

//                   <Link href="/contact" passHref>
//                     <Button
//                       size="lg"
//                       variant="outline"
//                       className="border-2 border-white/30 text-white hover:bg-white hover:text-emerald-700 px-8 py-3 rounded-xl transition-all duration-300"
//                     >
//                       Let's Innovate Together
//                     </Button>
//                   </Link>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <WhatsAppFloat />

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
//           50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
//         }
//         .animate-float {
//           animation: float ease-in-out infinite;
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
import { 
  Download, 
  Eye, 
  Terminal, 
  Server, 
  Cpu, 
  BarChart4, 
  Database,
  Layers, 
  GitBranch, 
  GraduationCap, 
  Award, 
  Star, 
  Code,
  CheckCircle 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import HeroSection from "@/components/HeroSection"

// Kept your preferred mature data array exactly as provided
const technicalSkills = [
  {
    category: "AI & Agentic Systems",
    skills: [
      "LangGraph",
      "LangChain",
      "LangSmith",
      "LlamaIndex",
      "Retrieval-Augmented Generation (RAG)",
      "Model Context Protocol (MCP)",
      "Tool Calling",
      "Multi-Agent Workflows",
      "Vector Search & Retrieval"
    ],
    icon: Cpu,
    gradient: "from-purple-500 to-fuchsia-500",
  },

  {
    category: "Backend Engineering",
    skills: [
      "Node.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "C#",
      "Java",
      "GO",
      "ASP.NET Core",
      "REST API Development",
      "Authentication & Authorization",
      "JWT"
    ],
    icon: Server,
    gradient: "from-blue-500 to-indigo-500",
  },

  {
    category: "Full-Stack Development",
    skills: [
      "Next.js",
      "React",
      "Blazor",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Responsive UI Development",
      "Modern Web Applications"
    ],
    icon: Terminal,
    gradient: "from-emerald-500 to-teal-500",
  },

  {
    category: "Databases & Data Management",
    skills: [
      "PostgreSQL",
      "SQL",
      "MongoDB",
      "SQLite",
      "Database Design",
      "Query Optimization",
      "Data Modeling",
      "Vector Databases"
    ],
    icon: Database,
    gradient: "from-amber-500 to-orange-500",
  },

  {
    category: "Distributed Systems",
    skills: [
      "Apache Kafka",
      "RabbitMQ",
      "Redis (Caching & Pub/Sub)",
      "Event Streaming",
      "Publish/Subscribe Messaging",
      "Microservices Architecture",
      "Event-Driven Design",
      "Asynchronous Processing",
      "Service Integration"
    ],
    icon: Layers,
    gradient: "from-rose-500 to-pink-500",
  },

  {
    category: "Cloud, DevOps & Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "Infrastructure as Code",
      "Deployment Automation",
      "Production Deployments"
    ],
    icon: GitBranch,
    gradient: "from-cyan-500 to-blue-500",
  },
];

const mainExpertise = [
  "Full-Stack Software Development (Web Applications & APIs)",
  "Backend Engineering & Microservices Architecture",
  "AI & Agentic System Integration (RAG, Tool-Calling, LLM Workflows)",
  "Distributed Systems & Event-Driven Architecture",
  "Database Design, Optimization & Data Modeling",
  "Web Automation & API Integration",
];

const education = [
  {
    degree: "Bachelor of Science in Software Development",
    institution: "Brigham Young University – Idaho",
    status: "Graduated",
    year: "2026",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    degree: "Associate of Applied Science in Software Development",
    institution: "Brigham Young University – Idaho",
    status: "Graduated",
    year: "2026",
    icon: GraduationCap, // Kept GraduationCap for degree
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    degree: "Software Development Certification",
    institution: "Brigham Young University – Idaho",
    status: "Completed",
    year: "2026",
    icon: Award, // Kept Award for certification
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    degree: "Web Development Certification",
    institution: "Brigham Young University – Idaho",
    status: "Completed",
    year: "2025",
    icon: Award, 
    gradient: "from-amber-500 to-orange-500",
  },
  {
    degree: "Web & Computer Programming Certification",
    institution: "Brigham Young University – Idaho",
    status: "Completed",
    year: "2024",
    icon: Award,
    gradient: "from-cyan-500 to-blue-500",
  },
]

export default function ResumePage() {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Alexander_Cyril_Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/slider/Resume1.jpg"
        imageAlt="Resume Section"
        title={
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Professional <span className="text-emerald-300">Resume</span>
          </h1>
        }
        subtitle="Technical Expertise & Qualifications"
      />

      {/* Quick Actions Bar */}
      <div className="relative -mt-10 z-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row gap-4 justify-center border border-slate-100"
          >
            <Button
              size="lg"
              onClick={handleViewResume}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Eye className="mr-2 w-5 h-5" />
              View Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 px-8 py-3 rounded-xl transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Technical Expertise - Swapped entirely with your preferred design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
              <Code className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-600 font-bold">Technical Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Engineering Skill Set</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies, frameworks, and tools used to design, build, deploy, and maintain production-ready software systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:border-slate-300 flex flex-col">
                  <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                    {/* Header Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${skillGroup.gradient} text-white shadow-sm shadow-slate-100 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <skillGroup.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-200">
                        {skillGroup.category}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-50 text-slate-700 hover:bg-slate-100 font-normal border border-slate-200/60 px-2.5 py-1 text-xs rounded-md"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies - Dark Theme with Twinkle Background */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            
            {[...Array(30)].map((_, i) => (
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
          </div>

          <div className="relative z-10 py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 space-y-4"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-400 font-bold">Strengths</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  Core <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Competencies</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full" />
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Primary areas of expertise and delivery strengths
                </p>
              </motion.div>

              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  {mainExpertise.map((expertise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-emerald-400/50 transition-all duration-300">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                          {expertise}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Education & Certifications - Timeline Layout with Custom Glow Effects */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-purple-600 font-bold">Education</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Education & <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Academic background and professional certifications
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 pl-6 sm:pl-10 space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group relative"
              >
                {/* Timeline node tracker track lines */}
                <div className="absolute -left-[32px] sm:-left-[49px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-slate-300 group-hover:border-emerald-500 transition-colors duration-300 z-10">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300" />
                </div>

                {/* Card Glow Highlight Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`} />
                
                <Card className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
                            {item.degree}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-none px-3 py-1`}>
                              {item.status}
                            </Badge>
                            <Badge variant="outline" className="border-slate-200 text-slate-600 font-mono">
                              {item.year}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-slate-500">{item.institution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloat />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}