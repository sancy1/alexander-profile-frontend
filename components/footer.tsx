// "use client"

// import { motion } from "framer-motion"
// import { Mail, MailIcon, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2 } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// const services = [
//   "Full-Stack Development",
//   "Mobile Development",
//   "Machine Learning & AI",
//   "Data Analytics",
//   "Process Automation",
//   "Backend Development",
//   "Frontend Development",
// ]

// const socialLinks = [
//   {
//     icon: Linkedin,
//     name: "LinkedIn",
//     href: "https://linkedin.com/in/alexander-cyril",
//     color: "hover:text-blue-600",
//   },
//   {
//     icon: Github,
//     name: "GitHub",
//     href: "https://github.com/alexander-cyril",
//     color: "hover:text-slate-900",
//   },
//   {
//     icon: MessageCircle,
//     name: "WhatsApp",
//     href: "https://wa.me/15551234567",
//     color: "hover:text-green-600",
//   },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-1"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
//                 ASC
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Alexander S. Cyril</h3>
//                 <Badge className="bg-emerald-600 text-white text-xs">Software Engineer</Badge>
//               </div>
//             </div>
//             <p className="text-slate-300 mb-6 leading-relaxed">
//               Passionate software engineer specializing in full-stack and mobile development, machine learning, and data analytics.
//               Building innovative solutions that transform ideas into reality.
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 transition-colors duration-300 ${social.color}`}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Services</h4>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <li key={index} className="text-slate-300 flex items-center gap-2">
//                   <Code2 className="w-3 h-3 text-emerald-400" />
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Get In Touch</h4>
//             <div className="space-y-4">

//               <Link 
//                   href="mailto:sanchez.a.cyril@gmail.com"
//                   className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
//                 >
//                   <Mail className="w-5 h-5 text-emerald-400" />
//                   <span>sanchez.a.cyril@gmail.com</span>
//               </Link>

//               <div className="flex items-center gap-3">
//                 <Globe className="w-5 h-5 text-emerald-400" />
//                 <Link 
//                   href="https://www.alexander.xyz" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-300 hover:text-emerald-400 transition-colors"
//                 >
//                   www.alexander.xyz
//                 </Link>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-emerald-400" />
//                 <span className="text-slate-300">+(234) 902-216-2214 | 906-746-7561</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-5 h-5 text-emerald-400" />
//                 <span className="text-slate-300">Available Worldwide</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>


//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="border-t border-slate-800 mt-12 pt-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-slate-400 text-sm flex items-center gap-2">
//               © 2025 Alexander S. Cyril. Made with <Heart className="w-4 h-4 text-red-500" /> and{" "}
//               <Code2 className="w-4 h-4 text-emerald-400" />
//             </p>
//             <div className="flex gap-6 text-sm text-slate-400">
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Sitemap</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }


































// "use client"

// import { motion } from "framer-motion"
// import { Mail, MailIcon, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2 } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import DateTimeLocationWeather from "./DateTimeLocationWeather"

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// const services = [
//   "Full-Stack Development",
//   "Mobile Development",
//   "Machine Learning & AI",
//   "Data Analytics",
//   "Process Automation",
//   "Backend Development",
//   "Frontend Development",
// ]

// const socialLinks = [
//   {
//     icon: Linkedin,
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/alexander-cyril-603a2528a/",
//     color: "hover:text-blue-600",
//   },
//   {
//     icon: Github,
//     name: "GitHub",
//     href: "https://github.com/alexcy1",
//     color: "hover:text-slate-900",
//   },
//   {
//     icon: MessageCircle,
//     name: "WhatsApp",
//     href: "https://wa.me/15551234567",
//     color: "hover:text-green-600",
//   },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-1"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
//                 ASC
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Alexander S. Cyril</h3>
//                 <Badge className="bg-emerald-600 text-white text-xs">Software Engineer</Badge>
//               </div>
//             </div>
//             <p className="text-slate-300 mb-6 leading-relaxed">
//               Passionate software engineer specializing in full-stack and mobile development, machine learning, and data analytics.
//               Building innovative solutions that transform ideas into reality.
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 transition-colors duration-300 ${social.color}`}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     href={link.href}
//                     className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Services</h4>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <li key={index} className="text-slate-300 flex items-center gap-2">
//                   <Code2 className="w-3 h-3 text-emerald-400" />
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-emerald-400">Get In Touch</h4>
//             <div className="space-y-4">

//               <Link 
//                   href="mailto:sanchez.a.cyril@gmail.com"
//                   className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
//                 >
//                   <Mail className="w-5 h-5 text-emerald-400" />
//                   <span>sanchez.a.cyril@gmail.com</span>
//               </Link>

//               <div className="flex items-center gap-3">
//                 <Globe className="w-5 h-5 text-emerald-400" />
//                 <Link 
//                   href="https://www.alexander.xyz" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-slate-300 hover:text-emerald-400 transition-colors"
//                 >
//                   www.alexander.xyz
//                 </Link>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-emerald-400" />
//                 <span className="text-slate-300">+(234) 902-216-2214 | 906-746-7561</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-5 h-5 text-emerald-400" />
//                 <span className="text-slate-300">Available Worldwide</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>


//         {/* Date/Time/Weather Card - Full width above copyright */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-12"
//         >
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 w-full">
//             <DateTimeLocationWeather />
//           </div>
//         </motion.div>


//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="border-t border-slate-800 mt-12 pt-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-slate-400 text-sm flex items-center gap-2">
//               © 2025 Alexander S. Cyril. Made with <Heart className="w-4 h-4 text-red-500" /> and{" "}
//               <Code2 className="w-4 h-4 text-emerald-400" />
//             </p>
//             <div className="flex gap-6 text-sm text-slate-400">
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
//               <span className="hover:text-emerald-400 transition-colors cursor-pointer">Sitemap</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }


























// "use client"

// import { motion } from "framer-motion"
// import { Mail, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2 } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import DateTimeLocationWeather from "./DateTimeLocationWeather"

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// const services = [
//   "Full-Stack Development",
//   "Mobile Development",
//   "Machine Learning & AI",
//   "Data Analytics",
//   "Process Automation",
//   "Backend Development",
//   "Frontend Development",
// ]

// const socialLinks = [
//   {
//     icon: Linkedin,
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/alexander-cyril-603a2528a/",
//     color: "hover:text-blue-600",
//   },
//   {
//     icon: Github,
//     name: "GitHub",
//     href: "https://github.com/alexcy1",
//     color: "hover:text-slate-900",
//   },
//   {
//     icon: MessageCircle,
//     name: "WhatsApp",
//     href: "https://wa.me/15551234567",
//     color: "hover:text-green-600",
//   },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="w-full px-4 py-16">
//         {/* Main Footer Content - Constrained Width */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Brand Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="lg:col-span-1"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
//                   ASC
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold">Alexander Cyril</h3>
//                   <Badge className="bg-emerald-600 text-white text-xs">Software Engineer</Badge>
//                 </div>
//               </div>
//               <p className="text-slate-300 mb-6 leading-relaxed text-sm">
//                 Passionate software engineer specializing in full-stack and mobile development, machine learning, and
//                 data analytics. Building innovative solutions that transform ideas into reality.
//               </p>
//               <div className="flex gap-4 text-sm">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 transition-colors duration-300 ${social.color}`}
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h4>
//               <ul className="space-y-3 text-sm">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       href={link.href}
//                       className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
//                     >
//                       <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Services */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-6 text-emerald-400">Services</h4>
//               <ul className="space-y-3 text-sm">
//                 {services.map((service, index) => (
//                   <li key={index} className="text-slate-300 flex items-center gap-2">
//                     <Code2 className="w-3 h-3 text-emerald-400" />
//                     {service}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-6 text-emerald-400">Get In Touch</h4>
//               <div className="space-y-4 text-sm">
//                 <Link
//                   href="mailto:sanchez.a.cyril@gmail.com"
//                   className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
//                 >
//                   <Mail className="w-5 h-5 text-emerald-400" />
//                   <span>sanchez.a.cyril@gmail.com</span>
//                 </Link>

//                 <div className="flex items-center gap-3">
//                   <Globe className="w-5 h-5 text-emerald-400" />
//                   <Link
//                     href="https://www.alexander.xyz"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-300 hover:text-emerald-400 transition-colors"
//                   >
//                     https://www.alexander.xyz
//                   </Link>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-emerald-400" />
//                   <span className="text-slate-300">+(234) 902-216-2214 | 906-746-7561</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MapPin className="w-5 h-5 text-emerald-400" />
//                   <span className="text-slate-300">Available Worldwide</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Date/Time/Weather Card - Constrained width */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-12"
//         >
//           <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 max-w-6xl mx-auto">
//             <DateTimeLocationWeather />
//           </div>
//         </motion.div>

//         {/* Bottom Section - Constrained Width */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="border-t border-slate-800 mt-12 pt-8"
//         >
//           <div className="max-w-6xl mx-auto text-sm">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-slate-400 text-sm flex items-center gap-2">
//                 © 2025 Alexander S. Cyril. Made with <Heart className="w-4 h-4 text-red-500" /> and{" "}
//                 <Code2 className="w-4 h-4 text-emerald-400" />
//               </p>
//               <div className="flex gap-6 text-sm text-slate-400 text-sm">
//                 <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
//                 <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
//                 <span className="hover:text-emerald-400 transition-colors cursor-pointer">Sitemap</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }



















"use client"

import { motion } from "framer-motion"
import { Mail, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import DateTimeLocationWeather from "./DateTimeLocationWeather"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
  { name: "Codehub", href: "/codehub" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Full-Stack Development",
  "Mobile Development",
  "Machine Learning & AI",
  "Data Analytics",
  "Process Automation",
  "Backend Development",
  "Frontend Development",
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-cyril-603a2528a/",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/alexcy1",
    color: "hover:text-slate-900",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    href: "https://wa.me/15551234567",
    color: "hover:text-green-600",
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full px-4 py-16">
        {/* Main Footer Content - Constrained Width */}
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
                Passionate software engineer specializing in full-stack and mobile development, machine learning, and
                data analytics. Building innovative solutions that transform ideas into reality.
              </p>
              <div className="flex gap-4 text-sm">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
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

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">Services</h4>
              <ul className="space-y-3 text-sm">
                {services.map((service, index) => (
                  <li key={index} className="text-slate-300 flex items-center gap-2">
                    <Code2 className="w-3 h-3 text-emerald-400" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">Get In Touch</h4>
              <div className="space-y-4 text-sm">
                <Link
                  href="mailto:sanchez.a.cyril@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>sanchez.a.cyril@gmail.com</span>
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
                {/* Newsletter Signup Form */}
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <h5 className="text-sm font-semibold mb-3 text-emerald-400">Stay Updated</h5>
                  <p className="text-xs text-slate-400 mb-3">
                    Get the latest insights and updates delivered to your inbox. No spam
                  </p>
                  <form className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                      >
                        Subscribe
                      </button>
                    </div>
                    {/* <p className="text-xs text-slate-500">
                      No spam, unsubscribe anytime. Just quality content updates.
                    </p> */}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Date/Time/Weather Card - Constrained width */}
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

        {/* Bottom Section - Constrained Width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="max-w-6xl mx-auto text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm flex items-center gap-2">
                © 2025 Alexander S. Cyril. Made with <Heart className="w-4 h-4 text-red-500" /> and{" "}
                <Code2 className="w-4 h-4 text-emerald-400" />
              </p>
              <div className="flex gap-6 text-sm text-slate-400 text-sm">
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Sitemap</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
