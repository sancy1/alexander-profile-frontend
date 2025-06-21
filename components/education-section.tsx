// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { FullWidthSection } from "./full-width-section"

// // Your educationCards data would go here
// const educationCards = [
//   // ... your education cards data
// ]

// export function EducationSection() {
//   return (
//     <FullWidthSection className="py-20 bg-slate-50">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Educational Foundation</h2>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//           Continuous learning and professional development drive my expertise
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {educationCards.map((card, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -10 }}
//             className="group"
//           >
//             <Card className={`h-full ${card.color} border-2 transition-all duration-300 group-hover:shadow-xl`}>
//               <CardContent className="p-8 text-center">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
//                   {card.icon && <card.icon className="w-8 h-8 text-emerald-600" />}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
//                 <p className="text-slate-600 mb-4">{card.institution}</p>
//                 <div className="flex items-center justify-center gap-2">
//                   <Badge
//                     variant={card.status === "Completed" ? "default" : "secondary"}
//                     className={card.status === "Completed" ? "bg-green-600 text-white" : "bg-emerald-600 text-white"}
//                   >
//                     {card.status}
//                   </Badge>
//                   <Badge variant="outline" className="border-emerald-600 text-emerald-600">
//                     {card.year}
//                   </Badge>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </FullWidthSection>
//   )
// }
