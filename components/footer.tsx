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
//   { name: "Codehub", href: "/codehub" },
//   { name: "Blog", href: "/blog" },
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
//   icon: MessageCircle,
//   name: "WhatsApp",
//   href: "#", // Keep as fallback
//   onClick: () => {
//     const phoneNumber = "2349067467561"; // Your number without + or dashes
//     const message = "Hello Alexander! I visited your website and would love to chat about a potential project or learn more about your services. Could you please provide some information?";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   },
//   color: "hover:text-green-600",
// }
// ]

// const SocialLinks = () => (
//   <>
//     {socialLinks.map((link) => (
//       <a
//         key={link.name}
//         href={link.href}
//         onClick={(e) => {
//           if (link.onClick) {
//             e.preventDefault();
//             link.onClick();
//           }
//         }}
//         className={`p-2 ${link.color} transition-colors duration-200`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <link.icon className="h-6 w-6" />
//       </a>
//     ))}
//   </>
// );


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
//                     // Add the onClick handler here
//                     onClick={(e) => {
//                       if (social.onClick) { // Check if onClick property exists
//                         e.preventDefault(); // Prevent default link behavior if onClick is handled
//                         social.onClick(); // Execute the custom onClick function
//                       }
//                     }}
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

//                 {/* Newsletter Signup Form */}
//                 <div className="mt-6 pt-4 border-t border-slate-700">
//                   <h5 className="text-sm font-semibold mb-3 text-emerald-400">Stay Updated</h5>
//                   <p className="text-xs text-slate-400 mb-3">
//                     Get the latest insights and updates delivered to your inbox. No spam
//                   </p>
//                   <form className="space-y-3">
//                     <div className="flex flex-col sm:flex-row gap-2">
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         required
//                         className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
//                       />
//                       <button
//                         type="submit"
//                         className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
//                       >
//                         Subscribe
//                       </button>
//                     </div>
//                     {/* <p className="text-xs text-slate-500">
//                       No spam, unsubscribe anytime. Just quality content updates.
//                     </p> */}
//                   </form>
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


























// // components/footer.tsx
// "use client" // Keep this at the very top

// import { motion } from "framer-motion"
// import { Mail, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2 } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import DateTimeLocationWeather from "./DateTimeLocationWeather"
// import React, { useState } from "react" // Import useState
// import { useToast } from "@/components/ui/use-toast" // Import useToast

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Codehub", href: "/codehub" },
//   { name: "Blog", href: "/blog" },
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
//     href: "#", // Keep as fallback
//     onClick: () => {
//       const phoneNumber = "2349067467561"; // Your number without + or dashes
//       const message = "Hello Alexander! I visited your website and would love to chat about a potential project or learn more about your services. Could you please provide some information?";
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//       window.open(whatsappUrl, "_blank");
//     },
//     color: "hover:text-green-600",
//   }
// ]

// const SocialLinks = () => (
//   <>
//     {socialLinks.map((link) => (
//       <a
//         key={link.name}
//         href={link.href}
//         onClick={(e) => {
//           if (link.onClick) {
//             e.preventDefault();
//             link.onClick();
//           }
//         }}
//         className={`p-2 ${link.color} transition-colors duration-200`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <link.icon className="h-6 w-6" />
//       </a>
//     ))}
//   </>
// );


// export default function Footer() {
//   // State for newsletter form
//   const [email, setEmail] = useState<string>("")
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
//   const { toast } = useToast() // Initialize useToast

//   // Handle newsletter subscription form submission
//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault() // Prevent default form submission
//     setIsSubmitting(true) // Set submitting state to true

//     // Basic client-side email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       toast({
//         title: "Invalid Email",
//         description: "Please enter a valid email address.",
//         variant: "destructive",
//       })
//       setIsSubmitting(false)
//       return
//     }

//     // Get backend URL from environment variables
//     const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
//     if (!backendUrl) {
//       toast({
//         title: "Configuration Error",
//         description: "Backend API URL is not configured. Please contact support.",
//         variant: "destructive",
//       })
//       setIsSubmitting(false)
//       return
//     }

//     try {
//       const response = await fetch(`${backendUrl}/api/newsletter/subscribe/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       })

//       if (response.ok) {
//         console.log("Subscription successful! The response.ok block was executed."); // Add this line
//         toast({
//           title: "Subscription Successful!",
//           description: "Thank you for subscribing to our newsletter! Please check your inbox for a confirmation email.",
//           variant: "default",
//         });
//         setEmail(""); // Clear the email input
//       } else {
//         // Handle API errors (e.g., email already subscribed, server error)
//         const errorData = await response.json()
//         const errorMessage = errorData.error || errorData.message || "An unexpected error occurred."

//         toast({
//           title: "Subscription Failed",
//           description: errorMessage,
//           variant: "destructive",
//         })
//       }
//     } catch (error) {
//       console.error("Error subscribing to newsletter:", error)
//       toast({
//         title: "Network Error",
//         description: "Could not connect to the server. Please check your internet connection and try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false) // Reset submitting state
//     }
//   }

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
//                     // Add the onClick handler here
//                     onClick={(e) => {
//                       if (social.onClick) { // Check if onClick property exists
//                         e.preventDefault(); // Prevent default link behavior if onClick is handled
//                         social.onClick(); // Execute the custom onClick function
//                       }
//                     }}
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
                
//                 {/* Newsletter Signup Form */}
//                 <div className="mt-6 pt-4 border-t border-slate-700">
//                   <h5 className="text-sm font-semibold mb-3 text-emerald-400">Stay Updated</h5>
//                   <p className="text-xs text-slate-400 mb-3">
//                     Get the latest insights and updates delivered to your inbox. No spam
//                   </p>
//                   <form onSubmit={handleSubscribe} className="space-y-3"> {/* Added onSubmit */}
//                     <div className="flex flex-col sm:flex-row gap-2">
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         required
//                         value={email} // Bind value to state
//                         onChange={(e) => setEmail(e.target.value)} // Update state on change
//                         className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
//                       />
//                       <button
//                         type="submit"
//                         disabled={isSubmitting} // Disable button while submitting
//                         className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
//                       >
//                         {isSubmitting ? "Subscribing..." : "Subscribe"} {/* Dynamic button text */}
//                       </button>
//                     </div>
//                     {/* Re-enabled and slightly modified this line, as it provides good UX */}
//                     <p className="text-xs text-slate-500">
//                       No spam, unsubscribe anytime. Just quality content updates.
//                     </p>
//                   </form>
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
































"use client" // Keep this at the very top

import { motion } from "framer-motion"
import { Mail, Globe, Phone, MapPin, Linkedin, Github, MessageCircle, Heart, Code2, CheckCircle, AlertCircle } from "lucide-react" // Added CheckCircle, AlertCircle
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import DateTimeLocationWeather from "./DateTimeLocationWeather"
import React, { useState } from "react" // Import useState
// import { useToast } from "@/components/ui/use-toast" // REMOVED: No longer needed for this form
import { useNewsletterSubscription } from "@/hooks/use-newsletter-subscription";

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
  "Desktop Development",
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
    href: "#", // Keep as fallback
    onClick: () => {
      const phoneNumber = "2349067467561"; // Your number without + or dashes
      const message = "Hello Alexander! I visited your website and would love to chat about a potential project or learn more about your services. Could you please provide some information?";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    },
    color: "hover:text-green-600",
  }
]

const SocialLinks = () => (
  <>
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={(e) => {
          if (link.onClick) { // Check if onClick property exists
            e.preventDefault(); // Prevent default link behavior if onClick is handled
            link.onClick(); // Execute the custom onClick function
          }
        }}
        className={`p-2 ${link.color} transition-colors duration-200`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <link.icon className="h-6 w-6" />
      </a>
    ))}
  </>
);


export default function Footer() {
  // const [email, setEmail] = useState<string>("")
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  // const [localMessage, setLocalMessage] = useState<{ type: string; text: string }>({
  //   type: "", // 'success' | 'error' | ''
  //   text: "",
  // })

  // const handleSubscribe = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setLocalMessage({ type: "", text: "" }) // Clear any previous messages
  //   setIsSubmitting(true)

  //   // Basic client-side email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //   if (!emailRegex.test(email)) {
  //     setLocalMessage({
  //       type: "error",
  //       text: "Please enter a valid email address.",
  //     })
  //     setIsSubmitting(false)
  //     setTimeout(() => setLocalMessage({ type: "", text: "" }), 5000);
  //     return
  //   }

  //   const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  //   if (!backendUrl) {
  //     setLocalMessage({
  //       type: "error",
  //       text: "Configuration error: Backend API URL is not configured. Please contact support.",
  //     })
  //     setIsSubmitting(false)
  //     setTimeout(() => setLocalMessage({ type: "", text: "" }), 5000);
  //     return
  //   }

  //   try {
  //     const response = await fetch(`${backendUrl}/api/newsletter/subscribe/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     })

  //     if (response.ok) {
  //       setLocalMessage({
  //         type: "success",
  //         text: "Thank you for subscribing! A confirmation email has been sent to your inbox.",
  //       })
  //       setEmail(""); // Clear the email input
  //       setTimeout(() => setLocalMessage({ type: "", text: "" }), 5000);
  //     } else {
  //       const errorData = await response.json()
  //       const backendErrorMessage = errorData.error || errorData.message || "An unexpected error occurred."

  //       let displayMessage = backendErrorMessage;

  //       // ⭐ MODIFIED PART: Check for specific "already subscribed" message ⭐
  //       const lowerCaseErrorMessage = backendErrorMessage.toLowerCase();
  //       if (lowerCaseErrorMessage.includes("already subscribed") ||
  //           lowerCaseErrorMessage.includes("email already exists") ||
  //           lowerCaseErrorMessage.includes("duplicate entry") // Add other phrases your backend might return
  //       ) {
  //         displayMessage = "This email address is already subscribed to our newsletter. Thank you!";
  //       }

  //       setLocalMessage({
  //         type: "error", // Still an 'error' type message
  //         text: displayMessage,
  //       })
  //       setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000);
  //     }
  //   } catch (error) {
  //     console.error("Error subscribing to newsletter:", error)
  //     setLocalMessage({
  //       type: "error",
  //       text: "Network Error: Could not connect to the server. Please check your internet connection and try again.",
  //     })
  //     setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000);
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const { email, setEmail, isSubmitting, localMessage, handleSubscribe } = useNewsletterSubscription();


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
                Passionate software engineer specializing in full-stack and desktop development, machine learning, and
                data analytics. Building innovative solutions that transform ideas into reality.
              </p>
              
              <div className="flex gap-4 text-sm">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    // Add the onClick handler here
                    onClick={(e) => {
                      if (social.onClick) { // Check if onClick property exists
                        e.preventDefault(); // Prevent default link behavior if onClick is handled
                        social.onClick(); // Execute the custom onClick function
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
                
                {/* Newsletter Signup Form */}
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <h5 className="text-sm font-semibold mb-3 text-emerald-400">Stay Updated</h5>
                  <p className="text-xs text-slate-400 mb-3">
                    Get the latest insights and updates delivered to your inbox. No spam
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
                    {/* Local Message Display Area */}
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
                © 2025 Alexander Sanchez Cyril
                <Code2 className="w-4 h-4 text-emerald-400" />
              </p>
              <div className="flex gap-6 text-sm text-slate-400 text-sm">
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</span>
                <Link href="/unsubscribe" passHref> {/* Added Unsubscribe Link */}
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