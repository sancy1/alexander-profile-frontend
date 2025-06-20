// "use client"

// import { motion } from "framer-motion"
// import { Server, Monitor, Database, Brain, TrendingUp, Zap, ArrowRight } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import HeroSection from "@/components/HeroSection";
// import Link from 'next/link';

// const services = [
//   {
//     title: "Robust Backend Solutions",
//     description:
//       "Crafting secure, scalable, and high-performance backend systems tailored to your unique business requirements. This includes custom API development, database design, and robust security implementations.",
//     tags: ["Python", "Django", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "RESTful APIs"],
//     icon: Server,
//     color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
//   },
//   {
//     title: "Dynamic User Experiences",
//     description:
//       "Building intuitive, responsive, and engaging user interfaces that provide seamless interactions across all devices, ensuring an exceptional user journey.",
//     tags: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
//     icon: Monitor,
//     color: "bg-green-50 border-green-200 hover:bg-green-100",
//   },
//   {
//     title: "Actionable Data Insights",
//     description:
//       "Transforming raw data into meaningful intelligence through advanced analytics, data pipeline development, and insightful visualizations to drive informed decision-making.",
//     tags: ["Pandas", "NumPy", "SQL", "PostgreSQL", "Data Analysis", "ETL"],
//     icon: Database,
//     color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
//   },
//   {
//     title: "Intelligent System Development",
//     description:
//       "Integrating cutting-edge machine learning and artificial intelligence models to automate tasks, predict trends, and enhance operational efficiency.",
//     tags: ["AI", "Machine Learning", "Predictive Analytics", "Automation"],
//     icon: Brain,
//     color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
//   },
//   {
//     title: "Strategic Financial Intelligence",
//     description:
//       "Providing comprehensive financial analysis, modeling, and business intelligence dashboards to support strategic planning and risk management.",
//     tags: ["Excel", "Python", "SQL", "Financial Modeling", "Business Intelligence"],
//     icon: TrendingUp,
//     color: "bg-red-50 border-red-200 hover:bg-red-100",
//   },
//   {
//     title: "Streamlined Operations",
//     description:
//       "Automating repetitive tasks and optimizing business processes to boost efficiency, reduce operational costs, and improve overall productivity.",
//     tags: ["Selenium", "Task Automation", "Workflow Optimization"],
//     icon: Zap,
//     color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
//   },
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//       <HeroSection
//         imageSrc="/images/slider/theme2.jpg"
//         imageAlt="About Section"
//         title={
//           <h1 className="text-4xl md:text-6xl text-slate-900 text-white mb-6">
//             Professional <span className="text-emerald-200">Services</span>
//           </h1>
//         }
//           subtitle="Comprehensive technology solutions designed to drive your business forward"
//         />
      

//       {/* Services Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What I Offer</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               End-to-end solutions tailored to meet your specific business needs and objectives
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group h-full"
//               >
//                 <Card className={`h-full ${service.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
//                   <CardContent className="p-8 h-full flex flex-col">
//                     <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <service.icon className="w-8 h-8 text-emerald-600" />
//                     </div>

//                     <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>

//                     <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

//                     <div className="space-y-4">
//                       <div className="flex flex-wrap gap-2">
//                         {service.tags.map((tag, tagIndex) => (
//                           <Badge key={tagIndex} className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs">
//                             {tag}
//                           </Badge>
//                         ))}
//                       </div>

//                       <Button
//                         variant="outline"
//                         className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300"
//                       >
//                         Learn More
//                         <ArrowRight className="ml-2 w-4 h-4" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Call to Action */}
//       <section className="py-20 bg-emerald-600">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
//             <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
//               Let's discuss how these services can be tailored to meet your specific needs and drive your business
//               forward.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3">
//                 Schedule Consultation
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>

              // <Link href="/portfolio" passHref>
              // <Button
              //   size="lg"
              //   variant="outline"
              //   className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
              // >
              //   See Portfolio
              // </Button>
              // </Link>

//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//       <WhatsAppFloat />
//     </div>
//   )
// }































"use client"

import { motion } from "framer-motion"
import { Server, Monitor, Database, Brain, TrendingUp, Zap, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import HeroSection from "@/components/HeroSection";
import Link from 'next/link';


const services = [
  {
    title: "Robust Backend Solutions",
    description:
      "Crafting secure, scalable, and high-performance backend systems tailored to your unique business requirements. This includes custom API development, database design, and robust security implementations.",
    tags: ["Python", "Django", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "RESTful APIs"],
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Dynamic User Experiences",
    description:
      "Building intuitive, responsive, and engaging user interfaces that provide seamless interactions across all devices, ensuring an exceptional user journey.",
    tags: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
    icon: Monitor,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-500/10",
  },
  {
    title: "Actionable Data Insights",
    description:
      "Transforming raw data into meaningful intelligence through advanced analytics, data pipeline development, and insightful visualizations to drive informed decision-making.",
    tags: ["Pandas", "NumPy", "SQL", "PostgreSQL", "Data Analysis", "ETL"],
    icon: Database,
    color: "from-purple-500 to-indigo-600",
    bg: "bg-purple-500/10",
  },
  {
    title: "Intelligent System Development",
    description:
      "Integrating cutting-edge machine learning and artificial intelligence models to automate tasks, predict trends, and enhance operational efficiency.",
    tags: ["AI", "Machine Learning", "Predictive Analytics", "Automation"],
    icon: Brain,
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-500/10",
  },
  {
    title: "Strategic Financial Intelligence",
    description:
      "Providing comprehensive financial analysis, modeling, and business intelligence dashboards to support strategic planning and risk management.",
    tags: ["Excel", "Python", "SQL", "Financial Modeling", "Business Intelligence"],
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
  },
  {
    title: "Streamlined Operations",
    description:
      "Automating repetitive tasks and optimizing business processes to boost efficiency, reduce operational costs, and improve overall productivity.",
    tags: ["Selenium", "Task Automation", "Workflow Optimization"],
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
  },
]



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/slider/theme2.jpg"
        imageAlt="Services Section"
        title={
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Professional <span className="text-emerald-300">Services</span>
          </h1>
        }
        subtitle="Cutting-edge solutions designed to propel your business forward"
      />

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              What I Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transformative <span className="text-emerald-600">Digital Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive services tailored to your unique business objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group h-full"
              >
                <Card className={`h-full border border-slate-200/70 bg-white/50 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-400/20 relative`}>
                  {/* Gradient accent */}
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>
                  
                  {/* Floating icon background */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${service.bg} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 h-full flex flex-col relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            className="bg-emerald-500/10 text-emerald-700 border border-emerald-400/30 hover:bg-emerald-500/20 transition-colors duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* <Button
                        variant="outline"
                        className={`w-full border-slate-200 text-slate-700 hover:bg-gradient-to-r ${service.color} hover:text-white hover:border-transparent transition-all duration-300 group/button`}
                      >
                        <span className="group-hover/button:translate-x-1 transition-transform duration-300">
                          Learn More
                        </span>
                        <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-1 transition-all duration-300" />
                      </Button> */}

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-900 relative overflow-hidden">
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
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Let's collaborate to create solutions that drive real business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/contact" passHref>
              <Button 
                size="lg" 
                className="bg-white text-emerald-800 hover:bg-slate-100 px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>

              <Link href="/portfolio" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
                >
                  See Portfolio
                </Button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}