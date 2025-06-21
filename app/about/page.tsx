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
//     year: "2024",
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

//       {/* Hero Section */}
//       {/* <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
//               About <span className="text-emerald-600">Alexander</span>
//             </h1>
//             <p className="text-xl text-slate-600 leading-relaxed">
//               Passionate about creating technology that transforms ideas into reality
//             </p>
//           </motion.div>
//         </div>
//       </section> */}



//     {/* Hero Section with Background Image */}
//     {/* <HeroSection
//       imageSrc="/images/slider/mobile.jpg"
//       imageAlt="Alexander's Background"
//       title="About Alexander"
//       subtitle="Passionate about creating technology that transforms ideas into reality"
//     /> */}

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
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">

//               {/* <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="relative">
//                   <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-slate-100 rounded-2xl flex items-center justify-center">
//                     <div className="w-64 h-64 bg-emerald-600 rounded-full flex items-center justify-center">
//                       <span className="text-6xl font-bold text-white">ASC</span>
//                     </div>
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
//                     <Heart className="w-12 h-12 text-white" />
//                   </div>
//                 </div>
//               </motion.div> */}

//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="relative">
//                   {/* Replaced gradient background with image */}
//                   <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
//                     <img 
//                       src="/images/slider/about.jpg" 
//                       alt="Background" 
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
//                       <span className="text-1xl font-bold text-white">ASC</span>
//                     </div>
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
//                     <Heart className="w-12 h-12 text-white" />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Journey</h2>
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   I'm Alexander Sanchez Cyril, a passionate and results-oriented software engineer with a strong foundation
//                   in full-stack and mobile development, backend systems, data analytics, and intelligent automation. With an
//                   academic background in Software Development and a track record of self-initiated tech projects, I
//                   specialize in building scalable applications that solve real-world problems.
//                 </p>
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   My passion lies in creating smooth user experiences, automating processes, and building solutions
//                   powered by data and logic. I believe in the transformative power of technology and strive to create
//                   solutions that not only meet technical requirements but also deliver exceptional value to users and
//                   businesses.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {["Problem Solver", "Tech Innovator", "Data Enthusiast", "Full-Stack Developer"].map((tag, index) => (
//                     <Badge key={index} className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Educational Foundation */}
//       <section className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Educational Foundation</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Continuous learning and professional development drive my expertise
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {educationCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group"
//               >
//                 <Card className={`h-full ${card.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
//                   <CardContent className="p-8 text-center">
//                     <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
//                       <card.icon className="w-8 h-8 text-emerald-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
//                     <p className="text-slate-600 mb-4">{card.institution}</p>
//                     <div className="flex items-center justify-center gap-2">
//                       <Badge
//                         variant={card.status === "Completed" ? "default" : "secondary"}
//                         className={
//                           card.status === "Completed" ? "bg-green-600 text-white" : "bg-emerald-600 text-white"
//                         }
//                       >
//                         {card.status}
//                       </Badge>
//                       <Badge variant="outline" className="border-emerald-600 text-emerald-600">
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

//       {/* Personal Philosophy */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
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

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
//                   <value.icon className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <Footer /> */}
//       <WhatsAppFloat />
//     </div>
//   )
// }



























"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Heart, Target, Users, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import NextImage from "next/image"
import HeroSection from "@/components/HeroSection";
import { FullWidthSection } from "@/components/full-width-section"

const educationCards = [
  {
    title: "Bachelor's Degree in Software Development",
    institution: "Brigham Young University – Idaho",
    year: "In Progress",
    status: "Current",
    icon: GraduationCap,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    title: "Machine Learning Certification",
    institution: "Coursera/Udemy",
    year: "2024",
    status: "Current",
    icon: Award,
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Database Design and Management",
    institution: "Brigham Young University – Idaho",
    year: "2024",
    status: "Completed",
    icon: Award,
    color: "bg-purple-50 border-purple-200",
  },
]

const values = [
  {
    title: "Continuous Learning",
    description:
      "Staying at the forefront of technology through constant skill development and exploration of emerging trends.",
    icon: Lightbulb,
  },
  {
    title: "Client Collaboration",
    description: "Building strong partnerships with clients through transparent communication and shared vision.",
    icon: Users,
  },
  {
    title: "Impactful Solutions",
    description: "Creating technology solutions that make a meaningful difference in businesses and people's lives.",
    icon: Target,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

    <HeroSection
      imageSrc="/images/slider/mobile.jpg"
      imageAlt="About Section"
      title={
        <h1 className="text-4xl md:text-6xl text-slate-900 text-white mb-6">
          About <span className="text-emerald-200">Alexander</span>
      </h1>
      }
      subtitle="Passionate about creating technology that transforms ideas into reality"
    />
    

      {/* Professional Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Replaced gradient background with image */}
                  <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/slider/about.jpg" 
                      alt="Background" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-1xl font-bold text-white">ASC</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Journey</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm Alexander Sanchez Cyril, a passionate and results-oriented software engineer with a strong foundation
                  in full-stack and mobile development, backend systems, data analytics, and intelligent automation. With an
                  academic background in Software Development and a track record of self-initiated tech projects, I
                  specialize in building scalable applications that solve real-world problems.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  My passion lies in creating smooth user experiences, automating processes, and building solutions
                  powered by data and logic. I believe in the transformative power of technology and strive to create
                  solutions that not only meet technical requirements but also deliver exceptional value to users and
                  businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solver", "Tech Innovator", "Data Enthusiast", "Full-Stack Developer"].map((tag, index) => (
                    <Badge key={index} className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Foundation */}

      
      <FullWidthSection className="py-20 bg-slate-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Educational Foundation</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Continuous learning and professional development drive my expertise
              </p>
            </motion.div>
      
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {educationCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className={`h-full ${card.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        {card.icon && <card.icon className="w-8 h-8 text-emerald-600" />}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                      <p className="text-slate-600 mb-4">{card.institution}</p>
                      <div className="flex items-center justify-center gap-2">
                        <Badge
                          variant={card.status === "Completed" ? "default" : "secondary"}
                          className={card.status === "Completed" ? "bg-green-600 text-white" : "bg-emerald-600 text-white"}
                        >
                          {card.status}
                        </Badge>
                        <Badge variant="outline" className="border-emerald-600 text-emerald-600">
                          {card.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </FullWidthSection>
          
      {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Educational Foundation</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Continuous learning and professional development drive my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {educationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className={`h-full ${card.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    <p className="text-slate-600 mb-4">{card.institution}</p>
                    <div className="flex items-center justify-center gap-2">
                      <Badge
                        variant={card.status === "Completed" ? "default" : "secondary"}
                        className={
                          card.status === "Completed" ? "bg-green-600 text-white" : "bg-emerald-600 text-white"
                        }
                      >
                        {card.status}
                      </Badge>
                      <Badge variant="outline" className="border-emerald-600 text-emerald-600">
                        {card.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Personal Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Values & Philosophy</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide my approach to technology and collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-emerald-600 text-white rounded-full mb-6 mx-auto group-hover:bg-emerald-700 transition-colors duration-300">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <WhatsAppFloat />
    </div>
  )
}
