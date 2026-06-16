// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// // Precise mapping matching the exact icon order and stack from the image
// const toolsList = [
//   { name: "TypeScript", icon: "/images/tools/typescript.svg" },
//   { name: "JavaScript", icon: "/images/tools/javascript.svg" },
//   { name: "Python", icon: "/images/tools/python.svg" },
//   { name: "Node.js", icon: "/images/tools/nodejs.svg" },
//   { name: "React", icon: "/images/tools/react.svg" },
//   { name: "Next.js", icon: "/images/tools/nextjs.svg" },
//   { name: "FastAPI", icon: "/images/tools/fastapi.svg" },
//   { name: "C#", icon: "/images/tools/csharp.svg" },
//   { name: "GO", icon: "/images/tools/go.svg" },
//   { name: "Java", icon: "/images/tools/java.svg" },
//   { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
//   { name: "MongoDB", icon: "/images/tools/mongodb.svg" },
//   { name: "Docker", icon: "/images/tools/docker.svg" },
//   { name: "Git", icon: "/images/tools/git.svg" }, 
//   { name: "AWS", icon: "/images/tools/aws.svg" },
//   {name: "RabbitMQ", icon: "/images/tools/rabbitmq.svg"},
//   {name: "Kafka", icon: "/images/tools/kafka.svg"},
//   {name: "Redis", icon: "/images/tools/redis.svg"},
//   {name: "Vitest", icon: "/images/tools/vitest.svg"},
//   { name: "Gin", icon: "/images/tools/gin.png" },
//   { name: "Spring", icon: "/images/tools/spring.svg" },
//   { name: "Django", icon: "/images/tools/django.svg" },
//   { name: "Nginx", icon: "/images/tools/nginx.svg" },
//   { name: "Terraform", icon: "/images/tools/terraform.svg" },
  
// ]

// export default function TechnologiesSection() {
//   return (
//     <section className="bg-[#030712] py-20 px-4 relative overflow-hidden">
//       {/* Subtle ambient background glow to mimic the image theme */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">
        
//         {/* Section Heading matching the image style */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
//             Technologies & Tools
//           </h2>
//           <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full" />
//         </div>

//         {/* Responsive Flex/Grid Wrap Container */}
//         <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 max-w-5xl mx-auto">
//           {toolsList.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.04 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.1 }}
//               className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[90px] group cursor-pointer"
//             >
//               {/* Icon Container with responsive sizing */}
//               <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 transition-transform duration-300">
//                 <Image
//                   src={tech.icon}
//                   alt={`${tech.name} logo`}
//                   width={48}
//                   height={48}
//                   className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
//                 />
//               </div>

//               {/* Tool Label */}
//               <span className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-300 tracking-wide text-center">
//                 {tech.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }




































// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { FullWidthSection } from "@/components/full-width-section"

// const toolsList = [
//   { name: "TypeScript", icon: "/images/tools/typescript.svg" },
//   { name: "JavaScript", icon: "/images/tools/javascript.svg" },
//   { name: "Python", icon: "/images/tools/python.svg" },
//   { name: "Node.js", icon: "/images/tools/nodejs.svg" },
//   { name: "React", icon: "/images/tools/react.svg" },
//   { name: "Next.js", icon: "/images/tools/nextjs.svg" },
//   { name: "FastAPI", icon: "/images/tools/fastapi.svg" },
//   { name: "C#", icon: "/images/tools/csharp.svg" },
//   { name: "GO", icon: "/images/tools/go.svg" },
//   { name: "Java", icon: "/images/tools/java.svg" },
//   { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
//   { name: "MongoDB", icon: "/images/tools/mongodb.svg" },
//   { name: "Docker", icon: "/images/tools/docker.svg" },
//   { name: "Git", icon: "/images/tools/git.svg" }, 
//   { name: "AWS", icon: "/images/tools/aws.svg" },
//   { name: "RabbitMQ", icon: "/images/tools/rabbitmq.svg" },
//   { name: "Kafka", icon: "/images/tools/kafka.svg" },
//   { name: "Redis", icon: "/images/tools/redis.svg" },
//   { name: "Vitest", icon: "/images/tools/vitest.svg" },
//   { name: "Fastify", icon: "/images/tools/fastify.svg" },
//   { name: "Gin", icon: "/images/tools/gin.png" },
//   { name: "Spring", icon: "/images/tools/spring.svg" },
//   { name: "Django", icon: "/images/tools/django.svg" },
//   { name: "Nginx", icon: "/images/tools/nginx.svg" },
//   { name: "Terraform", icon: "/images/tools/terraform.svg" },
// ]

// export default function TechnologiesSection() {
//   return (
//     <FullWidthSection 
//       backgroundColor="bg-[#030712]" 
//       className="py-24 relative overflow-hidden border-t border-slate-900"
//     >
//       {/* 1. Futuristic Cyber Grid Background */}
//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #10b981 1px, transparent 1px),
//             linear-gradient(to bottom, #10b981 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px"
//         }}
//       />

//       {/* Radial Gradient overlay to fade grid towards edges */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

//       {/* Cyber-glow orbs */}
//       <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="container mx-auto px-4 relative z-10">
        
//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
//             Technologies & Tools
//           </h2>
//           <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
//         </div>

//         {/* Responsive Flex Wrap Grid */}
//         <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10 max-w-5xl mx-auto">
//           {toolsList.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.02 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -4 }}
//               className="flex flex-col items-center justify-center min-w-[65px] sm:min-w-[85px] group cursor-pointer"
//             >
//               {/* 2. Scaled-down Icon Wrapper Container */}
//               <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-3 transition-all duration-300">
//                 <Image
//                   src={tech.icon}
//                   alt={`${tech.name} logo`}
//                   width={32}
//                   height={32}
//                   className="object-contain w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 filter transition-all duration-300"
//                 />
//               </div>

//               {/* Tool Label */}
//               <span className="text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 tracking-wide text-center">
//                 {tech.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </FullWidthSection>
//   )
// }































// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// const toolsList = [
//   { name: "TypeScript", icon: "/images/tools/typescript.svg" },
//   { name: "JavaScript", icon: "/images/tools/javascript.svg" },
//   { name: "Python", icon: "/images/tools/python.svg" },
//   { name: "Node.js", icon: "/images/tools/nodejs.svg" },
//   { name: "React", icon: "/images/tools/react.svg" },
//   { name: "Next.js", icon: "/images/tools/nextjs.svg" },
//   { name: "FastAPI", icon: "/images/tools/fastapi.svg" },
//   { name: "C#", icon: "/images/tools/csharp.svg" },
//   { name: "GO", icon: "/images/tools/go.svg" },
//   { name: "Java", icon: "/images/tools/java.svg" },
//   { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
//   { name: "MongoDB", icon: "/images/tools/mongodb.svg" },
//   { name: "Docker", icon: "/images/tools/docker.svg" },
//   { name: "Git", icon: "/images/tools/git.svg" }, 
//   { name: "AWS", icon: "/images/tools/aws.svg" },
//   { name: "RabbitMQ", icon: "/images/tools/rabbitmq.svg" },
//   { name: "Kafka", icon: "/images/tools/kafka.svg" },
//   { name: "Redis", icon: "/images/tools/redis.svg" },
//   { name: "Vitest", icon: "/images/tools/vitest.svg" },
//   { name: "Fastify", icon: "/images/tools/fastify.svg" },
//   { name: "Gin", icon: "/images/tools/gin.png" },
//   { name: "Spring", icon: "/images/tools/spring.svg" },
//   { name: "Django", icon: "/images/tools/django.svg" },
//   { name: "Nginx", icon: "/images/tools/nginx.svg" },
//   { name: "Terraform", icon: "/images/tools/terraform.svg" },
// ]

// export default function TechnologiesSection() {
//   return (
//     <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//       <div 
//         style={{ clipPath: 'inset(0 0 0 0)' }} 
//         className="relative w-full h-[600px] sm:h-[550px] lg:h-[500px] overflow-hidden"
//       >
//         {/* Fixed Canvas Wrapper - Stays locked to viewport */}
//         <div className="fixed inset-0 w-full h-full pointer-events-auto">
//           {/* Full-width background */}
//           <div 
//             className="absolute inset-0 bg-[#030712]" 
//             style={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
//           >
//             {/* Futuristic Cyber Grid Background */}
//             <div 
//               className="absolute inset-0 opacity-[0.03] pointer-events-none"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(to right, #10b981 1px, transparent 1px),
//                   linear-gradient(to bottom, #10b981 1px, transparent 1px)
//                 `,
//                 backgroundSize: "40px 40px"
//               }}
//             />

//             {/* Radial Gradient overlay to fade grid towards edges */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

//             {/* Cyber-glow orbs */}
//             <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
//             <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
//           </div>

//           {/* Section Content */}
//           <div className="relative z-10 w-full h-full flex items-center">
//             <div className="w-full px-4 sm:px-6 lg:px-8">
//               <div className="max-w-none sm:max-w-6xl lg:max-w-5xl mx-auto">
                
//                 {/* Section Heading */}
//                 <div className="text-center mb-12">
//                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
//                     Technologies & Tools
//                   </h2>
//                   <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
//                 </div>

//                 {/* Responsive Flex Wrap Grid */}
//                 <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10 max-w-5xl mx-auto">
//                   {toolsList.map((tech, index) => (
//                     <motion.div
//                       key={tech.name}
//                       initial={{ opacity: 0, y: 15 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: index * 0.02 }}
//                       viewport={{ once: true }}
//                       whileHover={{ y: -4 }}
//                       className="flex flex-col items-center justify-center min-w-[65px] sm:min-w-[85px] group cursor-pointer"
//                     >
//                       {/* Icon Wrapper Container */}
//                       <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-3 transition-all duration-300">
//                         <Image
//                           src={tech.icon}
//                           alt={`${tech.name} logo`}
//                           width={32}
//                           height={32}
//                           className="object-contain w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 filter transition-all duration-300"
//                         />
//                       </div>

//                       {/* Tool Label */}
//                       <span className="text-[11px] sm:text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 tracking-wide text-center">
//                         {tech.name}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
































"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const toolsList = [
  { name: "TypeScript", icon: "/images/tools/typescript.svg" },
  { name: "JavaScript", icon: "/images/tools/javascript.svg" },
  { name: "Python", icon: "/images/tools/python.svg" },
  { name: "Node.js", icon: "/images/tools/nodejs.svg" },
  { name: "React", icon: "/images/tools/react.svg" },
  { name: "Next.js", icon: "/images/tools/nextjs.svg" },
  { name: "FastAPI", icon: "/images/tools/fastapi.svg" },
  { name: "C#", icon: "/images/tools/csharp.svg" },
  { name: "GO", icon: "/images/tools/go.svg" },
  { name: "Java", icon: "/images/tools/java.svg" },
  { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
  { name: "MongoDB", icon: "/images/tools/mongodb.svg" },
  { name: "Docker", icon: "/images/tools/docker.svg" },
  { name: "Git", icon: "/images/tools/git.svg" }, 
  { name: "AWS", icon: "/images/tools/aws.svg" },
  { name: "RabbitMQ", icon: "/images/tools/rabbitmq.svg" },
  { name: "Kafka", icon: "/images/tools/kafka.svg" },
  { name: "Redis", icon: "/images/tools/redis.svg" },
  { name: "Vitest", icon: "/images/tools/vitest.svg" },
  { name: "Fastify", icon: "/images/tools/fastify.svg" },
  { name: "Gin", icon: "/images/tools/gin.png" },
  { name: "Spring", icon: "/images/tools/spring.svg" },
  { name: "Django", icon: "/images/tools/django.svg" },
  { name: "Nginx", icon: "/images/tools/nginx.svg" },
  { name: "Terraform", icon: "/images/tools/terraform.svg" },
]

export default function TechnologiesSection() {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div 
        style={{ clipPath: 'inset(0 0 0 0)' }} 
        className="relative w-full h-[650px] sm:h-[550px] lg:h-[500px] overflow-hidden"
      >
        {/* Fixed Canvas Wrapper - Stays locked to viewport */}
        <div className="fixed inset-0 w-full h-full pointer-events-auto">
          {/* Full-width background */}
          <div 
            className="absolute inset-0 bg-[#030712]" 
            style={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
          >
            {/* Futuristic Cyber Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #10b981 1px, transparent 1px),
                  linear-gradient(to bottom, #10b981 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px"
              }}
            />

            {/* Radial Gradient overlay to fade grid towards edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

            {/* Cyber-glow orbs */}
            <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          </div>

          {/* Section Content */}
          <div className="relative z-10 w-full h-full overflow-y-auto">
            <div className="min-h-full flex items-center py-8 sm:py-12">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-none sm:max-w-6xl lg:max-w-5xl mx-auto">
                  
                  {/* Section Heading */}
                  <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight px-2">
                      Technologies & Tools
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
                  </div>

                  {/* Responsive Flex Wrap Grid */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10 max-w-5xl mx-auto px-2">
                    {toolsList.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="flex flex-col items-center justify-center min-w-[55px] sm:min-w-[85px] group cursor-pointer"
                      >
                        {/* Icon Wrapper Container */}
                        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} logo`}
                            width={32}
                            height={32}
                            className="object-contain w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 filter transition-all duration-300"
                          />
                        </div>

                        {/* Tool Label */}
                        <span className="text-[10px] sm:text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 tracking-wide text-center">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}