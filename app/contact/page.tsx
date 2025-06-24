// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import HeroSection from "@/components/HeroSection";
// import Link from 'next/link';
// import { FullWidthSection } from "@/components/full-width-section"

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "sanchez.a.cyril@gmail.com | cyril.alexander.sanchez@gmail.com",
//     href: "mailto:sanchez.alexander.cyril@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+(234) 902-216-2214 | 906-746-7561",
//     href: "tel:+2349022162214",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Available Worldwide",
//     href: "#",
//   },
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

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Reset form
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//     setIsSubmitting(false)

//     // Show success message (you can implement a toast notification here)
//     alert("Message sent successfully! I'll get back to you soon.")
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//         <HeroSection
//           imageSrc="/images/slider/contact.jpg"
//           imageAlt="Services Section"
//           title={
//           <h1 className="text-4xl md:text-6xl text-white mb-6">
//              Let's <span className="text-emerald-300">Connect</span>
//           </h1>
//         }
//           subtitle="Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing."
//         />
      


//       {/* Contact Form & Info */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-5xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300">
//                   <CardContent className="p-8">
//                     <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Me a Message</h2>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="name">Name</Label>
//                           <Input
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             placeholder="Your full name"
//                             required
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="email">Phone</Label>
//                           <Input
//                             id="phone"
//                             name="phone"
//                             type="number"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             placeholder="Tel: 2349022162214"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="subject">Email</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Your.email@example.com"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="subject">Subject</Label>
//                         <Input
//                           id="subject"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleInputChange}
//                           placeholder="What's this about?"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="message">Message</Label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           placeholder="Tell me about your project or how I can help..."
//                           rows={6}
//                           required
//                         />
//                       </div>

//                       <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
//                       >
//                         {isSubmitting ? (
//                           <div className="flex items-center gap-2">
//                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                             Sending...
//                           </div>
//                         ) : (
//                           <div className="flex items-center gap-2">
//                             <Send className="w-5 h-5" />
//                             Send Message
//                           </div>
//                         )}
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               {/* Contact Information */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 <div>
//                   <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
//                   <p className="text-lg text-slate-600 leading-relaxed mb-8">
//                     I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
//                     Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear
//                     from you.
//                   </p>
//                 </div>

//                 {/* Contact Info Cards */}
//                 <div className="space-y-4">
//                   {contactInfo.map((info, index) => (
//                     <motion.a
//                       key={index}
//                       href={info.href}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.02 }}
//                       className="block"
//                     >
//                       <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md">
//                         <CardContent className="p-4">
//                           <div className="flex items-center gap-4">
//                             <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
//                               <info.icon className="w-6 h-6 text-emerald-600" />
//                             </div>
//                             <div>
//                               <h3 className="font-semibold text-slate-900">{info.title}</h3>
//                               <p className="text-slate-600">{info.value}</p>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </motion.a>
//                   ))}
//                 </div>

//                 {/* Social Links */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect on Social Media</h3>
//                   <div className="flex gap-4">
//                     {socialLinks.map((social, index) => (
//                       <motion.a
//                         key={index}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 transition-colors duration-300 ${social.color}`}
//                       >
//                         <social.icon className="w-6 h-6" />
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Special CTA Buttons */}
//       <FullWidthSection className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Something Great?</h2>
//             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//               Choose the best way to connect and let's turn your vision into reality
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">

//               <Link href="/contact" passHref>
//               <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
//                 Let's Innovate Together
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               </Link>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
//               >
//                 Let's Talk
//                 <MessageCircle className="ml-2 w-5 h-5" />
//               </Button>
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

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import HeroSection from "@/components/HeroSection"
// import Link from "next/link"
// import { FullWidthSection } from "@/components/full-width-section"

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "sanchez.a.cyril@gmail.com",
//     subValue: "cyril.alexander.sanchez@gmail.com",
//     href: "mailto:sanchez.alexander.cyril@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+(234) 902-216-2214",
//     subValue: "906-746-7561",
//     href: "tel:+2349022162214",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Available Worldwide",
//     subValue: "",
//     href: "#",
//   },
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

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Reset form
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//     setIsSubmitting(false)

//     // Show success message (you can implement a toast notification here)
//     alert("Message sent successfully! I'll get back to you soon.")
//   }

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Navigation />

//       {/* Hero Section */}
//       <HeroSection
//         imageSrc="/images/slider/contact.jpg"
//         imageAlt="Contact Section"
//         title={
//           <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 px-4 text-center">
//             Let's <span className="text-emerald-300">Connect</span>
//           </h1>
//         }
//         subtitle="Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing."
//       />

//       {/* Contact Form & Info */}
//       <section className="py-12 sm:py-16 lg:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//               {/* Contact Form */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="w-full"
//               >
//                 <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300 w-full">
//                   <CardContent className="p-4 sm:p-6 lg:p-8">
//                     <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send Me a Message</h2>

//                     <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="name" className="text-sm font-medium">
//                             Name
//                           </Label>
//                           <Input
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             placeholder="Your full name"
//                             className="w-full"
//                             required
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="phone" className="text-sm font-medium">
//                             Phone
//                           </Label>
//                           <Input
//                             id="phone"
//                             name="phone"
//                             type="tel"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             placeholder="2349022162214"
//                             className="w-full"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="email" className="text-sm font-medium">
//                           Email
//                         </Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="your.email@example.com"
//                           className="w-full"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="subject" className="text-sm font-medium">
//                           Subject
//                         </Label>
//                         <Input
//                           id="subject"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleInputChange}
//                           placeholder="What's this about?"
//                           className="w-full"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="message" className="text-sm font-medium">
//                           Message
//                         </Label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           placeholder="Tell me about your project or how I can help..."
//                           rows={5}
//                           className="w-full resize-none"
//                           required
//                         />
//                       </div>

//                       <Button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 sm:py-3 text-sm sm:text-base"
//                       >
//                         {isSubmitting ? (
//                           <div className="flex items-center justify-center gap-2">
//                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                             Sending...
//                           </div>
//                         ) : (
//                           <div className="flex items-center justify-center gap-2">
//                             <Send className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Send Message
//                           </div>
//                         )}
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               {/* Contact Information */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="space-y-6 sm:space-y-8 w-full"
//               >
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Get in Touch</h2>
//                   <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
//                     I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
//                     Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear
//                     from you.
//                   </p>
//                 </div>

//                 {/* Contact Info Cards */}
//                 <div className="space-y-4">
//                   {contactInfo.map((info, index) => (
//                     <motion.a
//                       key={index}
//                       href={info.href}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.02 }}
//                       className="block w-full"
//                     >
//                       <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md w-full">
//                         <CardContent className="p-3 sm:p-4">
//                           <div className="flex items-start gap-3 sm:gap-4">
//                             <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex-shrink-0">
//                               <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
//                             </div>
//                             <div className="min-w-0 flex-1">
//                               <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{info.title}</h3>
//                               <p className="text-slate-600 text-xs sm:text-sm break-words">{info.value}</p>
//                               {info.subValue && <p className="text-slate-500 text-xs break-words">{info.subValue}</p>}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </motion.a>
//                   ))}
//                 </div>

//                 {/* Social Links */}
//                 <div>
//                   <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Connect on Social Media</h3>
//                   <div className="flex gap-3 sm:gap-4">
//                     {socialLinks.map((social, index) => (
//                       <motion.a
//                         key={index}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full text-slate-600 transition-colors duration-300 ${social.color}`}
//                       >
//                         <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Special CTA Buttons */}
//       <FullWidthSection className="py-12 sm:py-16 lg:py-20 bg-slate-50">
//         <div className="text-center max-w-4xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
//               Ready to Start Something Great?
//             </h2>
//             <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
//               Choose the best way to connect and let's turn your vision into reality
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link href="/contact" passHref>
//                 <Button
//                   size="lg"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
//                 >
//                   Let's Innovate Together
//                   <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//                 </Button>
//               </Link>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
//               >
//                 Let's Talk
//                 <MessageCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </FullWidthSection>

//       <WhatsAppFloat />
//     </div>
//   )
// }

































"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from "lucide-react" // Added CheckCircle, AlertCircle
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import HeroSection from "@/components/HeroSection"
import Link from "next/link"
import { FullWidthSection } from "@/components/full-width-section"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sanchez.a.cyril@gmail.com",
    subValue: "cyril.alexander.sanchez@gmail.com",
    href: "mailto:sanchez.alexander.cyril@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+(234) 902-216-2214",
    subValue: "906-746-7561",
    href: "tel:+2349022162214",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Available Worldwide",
    subValue: "",
    href: "#",
  },
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [localMessage, setLocalMessage] = useState<{ type: string; text: string }>({
    type: "", // 'success' | 'error' | ''
    text: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalMessage({ type: "", text: "" }) // Clear previous messages
    setIsSubmitting(true)

    // Client-side validation
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push("Name is required.")
    if (!formData.phone.trim()) errors.push("Phone number is required.")
    else if (!/^\+?[0-9\s-()]{7,20}$/.test(formData.phone.trim())) errors.push("Please enter a valid phone number.")
    if (!formData.email.trim()) errors.push("Email is required.")
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.push("Please enter a valid email address.")
    if (!formData.subject.trim()) errors.push("Subject is required.")
    if (!formData.message.trim()) errors.push("Message is required.")

    if (errors.length > 0) {
      setLocalMessage({ type: "error", text: errors.join(" ") })
      setIsSubmitting(false)
      setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000); // Clear error after 8s
      return
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
        setLocalMessage({
            type: "error",
            text: "Configuration error: Backend API URL is not configured. Please contact support.",
        });
        setIsSubmitting(false);
        setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000); // Clear error after 8s
        return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/contacts/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setLocalMessage({
          type: "success",
          text: "Message sent successfully! I'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        })
        setTimeout(() => setLocalMessage({ type: "", text: "" }), 5000); // Clear success after 5s
      } else {
        const errorData = await response.json()
        const errorMessage = errorData.detail || errorData.error || errorData.message || "An unexpected error occurred."
        setLocalMessage({
          type: "error",
          text: errorMessage,
        })
        setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000); // Clear error after 8s
      }
    } catch (err) {
      console.error("Contact form API call failed:", err)
      setLocalMessage({
        type: "error",
        text: "Network Error: Could not connect to the server. Please check your internet connection and try again.",
      })
      setTimeout(() => setLocalMessage({ type: "", text: "" }), 8000); // Clear error after 8s
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/slider/contact.jpg"
        imageAlt="Contact Section"
        title={
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 px-4 text-center">
            Let's <span className="text-emerald-300">Connect</span>
          </h1>
        }
        subtitle="Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing."
      />

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300 w-full">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send Me a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="2349022162214"
                            className="w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="w-full"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or how I can help..."
                          rows={5}
                          className="w-full resize-none"
                          required
                        />
                      </div>

                      {/* Local Message Display Area */}
                      {localMessage.type && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`
                            p-3 rounded-md flex items-center gap-2 text-sm
                            ${localMessage.type === "success" ? "bg-green-100 text-green-700 border border-green-200" : ""}
                            ${localMessage.type === "error" ? "bg-red-100 text-red-700 border border-red-200" : ""}
                          `}
                          role="alert"
                        >
                          {localMessage.type === "success" && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                          {localMessage.type === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                          <p className="font-medium">{localMessage.text}</p>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 sm:py-3 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8 w-full"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Get in Touch</h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                    I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
                    Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear
                    from you.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="block w-full"
                    >
                      <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md w-full">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex-shrink-0">
                              <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{info.title}</h3>
                              <p className="text-slate-600 text-xs sm:text-sm break-words">{info.value}</p>
                              {info.subValue && <p className="text-slate-500 text-xs break-words">{info.subValue}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Connect on Social Media</h3>
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full text-slate-600 transition-colors duration-300 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Special CTA Buttons */}
      <FullWidthSection className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              Ready to Start Something Great?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Choose the best way to connect and let's turn your vision into reality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  Let's Innovate Together
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
              >
                Let's Talk
                <MessageCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </FullWidthSection>

      <WhatsAppFloat />
    </div>
  )
}