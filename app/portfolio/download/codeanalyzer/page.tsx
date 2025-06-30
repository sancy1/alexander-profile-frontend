
// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Download, ArrowRight, Info, Settings, Check, Smartphone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Image from "next/image"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { FullWidthSection } from "@/components/full-width-section"

// // App details data
// const appDetails = {
//   name: "Code-Analyzer Studio",
//   version: "1.0.0",
//   fileSize: "14 MB",
//   lastUpdated: "June 26, 2025",
//   installUrl: "/downloads/CodeAnalyzer_Setup.exe",
//   portableUrl: "/downloads/Code_Analyzer.exe"
// }

// // Features list
// const features = [
//   {
//     title: "Visual File Mapping",
//     description: "Automatically generates a visual representation of your project's file structure",
//     icon: Smartphone,
//   },
//   {
//     title: "Code Preview",
//     description: "Click any file to view its contents directly in the application",
//     icon: Settings,
//   },
//   {
//     title: "Project Navigation",
//     description: "Easily navigate through complex project structures with intuitive controls",
//     icon: ArrowRight,
//   },
//   {
//     title: "Dependency Analysis",
//     description: "Automatically identifies and visualizes inter-file and inter-module dependencies within your project.",
//     icon: Settings,
//   },
// ]


// // Installation steps
// const installationSteps = [
//   {
//     step: 1,
//     title: "Choose your preferred version",
//     description:
//       "You can download either the standard installer (.exe) or the portable version (no installation required).",
//   },
//   {
//     step: 2,
//     title: "Temporarily disable antivirus (optional but recommended)",
//     description:
//       "Windows Defender, Avast, or other antivirus programs may falsely block or warn against this app. To ensure a smooth experience, you can temporarily disable them or allow the app manually.",
//   },
//   {
//     step: 3,
//     title: "Download the file",
//     description:
//       "Click the appropriate download button to get the setup installer or the portable app file.",
//   },
//   {
//     step: 4,
//     title: "For installer users",
//     description:
//       "Double-click the downloaded `.exe` file to launch the setup wizard. If a warning or alert appears, choose 'More info' > 'Run anyway' or 'Allow'. Then follow the setup instructions.",
//   },
//   {
//     step: 5,
//     title: "For portable users",
//     description:
//       "Just double-click the portable `.exe` file after download. No installation is needed. You can place it anywhere on your computer.",
//   },
//   {
//     step: 6,
//     title: "Enjoy the app",
//     description:
//       "Start using Code Analyzer Studio to scan your project folders and view the full code structure instantly.",
//   },
// ]


// // App screenshot slides
// const appSlides = [
//   {
//     id: 1,
//     title: "Main Interface",
//     description: "The clean and intuitive main dashboard of the application",
//     image: "/images/portfolio/code-map.png",
//   },
//   {
//     id: 2,
//     title: "Full Code Analyzer",
//     description: "Provides comprehensive, in-depth analysis of entire codebases.",
//     image: "/images/portfolio/Full Code Analyzer.png",
//   },
//   {
//     id: 3,
//     title: "Selective Structure Analyzer",
//     description: "Analyzes specific project components or directories.",
//     image: "/images/portfolio/Selective Structure Analyzer.png",
//   },
//   {
//     id: 4,
//     title: "Standard Structure Analyzer",
//     description: "Verifies overall project architecture for best practices.",
//     image: "/images/portfolio/Standard Structure Analyzer.png",
//   },
//   {
//     id: 5,
//     title: "Code Snippets Analyzer",
//     description: "Focuses on quick, isolated code block analysis.",
//     image: "/images/portfolio/Code Snippets Analyzer.png",
//   },
// ]


// export default function DownloadPage() {
//   const [isDownloading, setIsDownloading] = useState(false)

// const handleDownload = (type: "installer" | "portable") => {
//   setIsDownloading(true)

//   setTimeout(() => {
//     const link = document.createElement("a")
//     const fileUrl =
//       type === "installer"
//         ? appDetails.installUrl
//         : appDetails.portableUrl

//     const fileName =
//       type === "installer"
//         ? `CodeAnalyzerStudio_${appDetails.version}_Installer.exe`
//         : `CodeAnalyzerStudio_${appDetails.version}_Portable.exe`

//     link.href = fileUrl
//     link.download = fileName
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//     setIsDownloading(false)
//   }, 1500)
// }




//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-50 to-emerald-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-12"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
//                 <Download className="w-8 h-8 text-emerald-600" />
//               </div>
//               <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
//                 Download <span className="text-emerald-600">Code-Analyzer Studio</span>
//               </h1>
//               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//                 A modern developer tool that visualizes your project structure and lets you explore file contents
//               </p>
//             </motion.div>

            
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Enhanced App Screenshot Carousel */}
            
//             <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full"
//             >
//             <Carousel className="w-full max-w-2xl mx-auto">
//                 <CarouselContent>
//                 {appSlides.map((slide) => (
//                     <CarouselItem key={slide.id}>
//                     <div className="p-1">
//                         <Card
//                         className="overflow-hidden border-2 border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
//                         onClick={() => {
//                             /* ONLY THIS SECTION IS NEW - FULLSCREEN VIEWER */
//                             const modal = document.createElement('div');
//                             modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
//                             modal.onclick = () => document.body.removeChild(modal);
                            
//                             const img = document.createElement('img');
//                             img.src = slide.image;
//                             img.alt = slide.title;
//                             img.className = 'max-w-full max-h-[90vh] object-contain';
                            
//                             const caption = document.createElement('div');
//                             caption.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center';
//                             caption.innerHTML = `
//                             <h3 class="text-white font-semibold text-lg">${slide.title}</h3>
//                             <p class="text-white/80 text-sm">${slide.description}</p>
//                             `;
                            
//                             modal.appendChild(img);
//                             modal.appendChild(caption);
//                             document.body.appendChild(modal);
//                         }}
//                         >
//                         {/* EVERYTHING BELOW REMAINS EXACTLY AS IN YOUR ORIGINAL CODE */}
//                         <CardContent className="flex aspect-[3/2] items-center justify-center p-0 relative">
//                             <Image
//                             src={slide.image}
//                             alt={slide.title}
//                             width={900}
//                             height={600}
//                             className="w-full h-full object-cover"
//                             />
//                             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                             <h3 className="text-white font-semibold">{slide.title}</h3>
//                             <p className="text-white/80 text-sm">{slide.description}</p>
//                             </div>
//                         </CardContent>
//                         </Card>
//                     </div>
//                     </CarouselItem>
//                 ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="left-2" />
//                 <CarouselNext className="right-2" />
//             </Carousel>
//             </motion.div>

//             {/* Download Info (unchanged) */}
//             <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//             >
//                 <Card className="border-2 border-emerald-200 bg-emerald-50">
//                 <CardHeader>
//                     <CardTitle className="text-2xl font-bold text-slate-900">
//                     Download Information
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="space-y-4">
//                     <div className="flex justify-between items-center">
//                         <span className="text-slate-600">Version:</span>
//                         <Badge className="bg-emerald-600 text-white">
//                         v{appDetails.version}
//                         </Badge>
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <span className="text-slate-600">File Size:</span>
//                         <span className="font-medium">{appDetails.fileSize}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <span className="text-slate-600">Last Updated:</span>
//                         <span className="font-medium">{appDetails.lastUpdated}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <span className="text-slate-600">Platform:</span>
//                         <span className="font-medium mb-4 block">Windows (32-bit & 64-bit)</span>
//                     </div>
//                     </div>


//                     <Button
//                     onClick={() => handleDownload("installer")}
//                     disabled={isDownloading}
//                     className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
//                     >
//                     💾 Download Installer (.exe)
//                     </Button>

//                     <Button
//                     onClick={() => handleDownload("portable")}
//                     disabled={isDownloading}
//                     className="bg-purple-600 hover:bg-indigo-700 text-white w-full mt-4"
//                     >
//                     📦 Download Portable (.exe)
//                     </Button>

//                 </CardContent>
//                 </Card>
//             </motion.div>

//             </div>
//           </div>
//         </div>
//       </FullWidthSection>




//       {/* Features Section */}
//       <FullWidthSection className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Powerful tools to help you understand and navigate your codebase
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
//                   <CardContent className="p-6 text-center">
//                     <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
//                       <feature.icon className="w-6 h-6 text-emerald-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
//                     <p className="text-slate-600">{feature.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </FullWidthSection>


//       {/* Installation Guide */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Installation Guide</h2>
//               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//                 Get started with Code-Analyzer Studio in just a few simple steps
//               </p>
//             </motion.div>

//             <div className="space-y-4">
//               {installationSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="flex items-start gap-6 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300"
//                 >
//                   <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full">
//                     <span className="text-emerald-600 font-bold">{step.step}</span>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
//                     <p className="text-slate-600">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* System Requirements */}
//       <FullWidthSection className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">System Requirements</h2>
//               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//                 Ensure your system meets these requirements for optimal performance
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <Card className="border-2 border-slate-200">
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-slate-900">
//                     Minimum Requirements
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">Windows 8, 10, and 11 (32-bit & 64-bit)</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">Compatible with Intel Pentium, Celeron, Atom, Core (i3 and above), and AMD Athlon or equivalent processors.</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">2GB RAM</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">100MB available storage</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card className="border-2 border-slate-200">
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-slate-900">
//                     Recommended Specifications
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">Windows 10, and 11 (32-bit & 64-bit)</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">Intel Core i3 (3rd Gen or later)</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">4GB RAM or more</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-slate-700">200MB available storage</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </FullWidthSection>

//       {/* CTA Section */}
//       <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
//             <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
//               Download Code-Analyzer Studio today and take control of your project structure
//             </p>


//             <Button
//                     onClick={() => handleDownload("installer")}
//                     disabled={isDownloading}
//                     className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
//                     >
//                     💾 Download Installer (.exe)
//                     </Button>

//                     <Button
//                     onClick={() => handleDownload("portable")}
//                     disabled={isDownloading}
//                     className="bg-purple-600 hover:bg-indigo-700 text-white w-full mt-4"
//                     >
//                     📦 Download Portable (.exe)
//                     </Button>

//           </motion.div>
//         </div>
//       </FullWidthSection>

//       <WhatsAppFloat />
//     </div>
//   )
// }

























"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, ArrowRight, Info, Settings, Check, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FullWidthSection } from "@/components/full-width-section"

// App details data
const appDetails = {
  name: "Code-Analyzer Studio",
  version: "1.0.0",
  fileSize: "14 MB",
  lastUpdated: "June 26, 2025",
  installUrl: "/downloads/CodeAnalyzer_Setup.exe",
  portableUrl: "/downloads/Code_Analyzer.exe"
}

// Video data
const videos = [
  {
    id: 1,
    title: "Full Code Analyzer",
    description: "Demonstration of the full code analysis capabilities",
    youtubeId: "9bIdImlnSKU",
    thumbnail: "https://img.youtube.com/vi/9bIdImlnSKU/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Selective Structure Analyzer",
    description: "How to analyze specific project components",
    youtubeId: "d09Oq_KcUuY",
    thumbnail: "https://img.youtube.com/vi/d09Oq_KcUuY/maxresdefault.jpg"
  }
]

// Features list
const features = [
  {
    title: "Visual File Mapping",
    description: "Automatically generates a visual representation of your project's file structure",
    icon: Smartphone,
  },
  {
    title: "Code Preview",
    description: "Click any file to view its contents directly in the application",
    icon: Settings,
  },
  {
    title: "Project Navigation",
    description: "Easily navigate through complex project structures with intuitive controls",
    icon: ArrowRight,
  },
  {
    title: "Dependency Analysis",
    description: "Automatically identifies and visualizes inter-file and inter-module dependencies within your project.",
    icon: Settings,
  },
]

// Installation steps
const installationSteps = [
  {
    step: 1,
    title: "Choose your preferred version",
    description:
      "You can download either the standard installer (.exe) or the portable version (no installation required).",
  },
  {
    step: 2,
    title: "Temporarily disable antivirus (optional but recommended)",
    description:
      "Windows Defender, Avast, or other antivirus programs may falsely block or warn against this app. To ensure a smooth experience, you can temporarily disable them or allow the app manually.",
  },
  {
    step: 3,
    title: "Download the file",
    description:
      "Click the appropriate download button to get the setup installer or the portable app file.",
  },
  {
    step: 4,
    title: "For installer users",
    description:
      "Double-click the downloaded `.exe` file to launch the setup wizard. If a warning or alert appears, choose 'More info' > 'Run anyway' or 'Allow'. Then follow the setup instructions.",
  },
  {
    step: 5,
    title: "For portable users",
    description:
      "Just double-click the portable `.exe` file after download. No installation is needed. You can place it anywhere on your computer.",
  },
  {
    step: 6,
    title: "Enjoy the app",
    description:
      "Start using Code Analyzer Studio to scan your project folders and view the full code structure instantly.",
  },
]

// App screenshot slides
const appSlides = [
  {
    id: 1,
    title: "Main Interface",
    description: "The clean and intuitive main dashboard of the application",
    image: "/images/portfolio/code-map.png",
  },
  {
    id: 2,
    title: "Full Code Analyzer",
    description: "Provides comprehensive, in-depth analysis of entire codebases.",
    image: "/images/portfolio/Full Code Analyzer.png",
  },
  {
    id: 3,
    title: "Selective Structure Analyzer",
    description: "Analyzes specific project components or directories.",
    image: "/images/portfolio/Selective Structure Analyzer.png",
  },
  {
    id: 4,
    title: "Standard Structure Analyzer",
    description: "Verifies overall project architecture for best practices.",
    image: "/images/portfolio/Standard Structure Analyzer.png",
  },
  {
    id: 5,
    title: "Code Snippets Analyzer",
    description: "Focuses on quick, isolated code block analysis.",
    image: "/images/portfolio/Code Snippets Analyzer.png",
  },
]

export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [activeVideo, setActiveVideo] = useState(videos[0].id)

  const handleDownload = (type: "installer" | "portable") => {
    setIsDownloading(true)

    setTimeout(() => {
      const link = document.createElement("a")
      const fileUrl =
        type === "installer"
          ? appDetails.installUrl
          : appDetails.portableUrl

      const fileName =
        type === "installer"
          ? `CodeAnalyzerStudio_${appDetails.version}_Installer.exe`
          : `CodeAnalyzerStudio_${appDetails.version}_Portable.exe`

      link.href = fileUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setIsDownloading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Download className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Download <span className="text-emerald-600">Code-Analyzer Studio</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A modern developer tool that visualizes your project structure and lets you explore file contents
              </p>
            </motion.div>

            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Enhanced App Screenshot Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Carousel className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    {appSlides.map((slide) => (
                      <CarouselItem key={slide.id}>
                        <div className="p-1">
                          <Card
                            className="overflow-hidden border-2 border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => {
                              /* ONLY THIS SECTION IS NEW - FULLSCREEN VIEWER */
                              const modal = document.createElement('div');
                              modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
                              modal.onclick = () => document.body.removeChild(modal);
                              
                              const img = document.createElement('img');
                              img.src = slide.image;
                              img.alt = slide.title;
                              img.className = 'max-w-full max-h-[90vh] object-contain';
                              
                              const caption = document.createElement('div');
                              caption.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center';
                              caption.innerHTML = `
                                <h3 class="text-white font-semibold text-lg">${slide.title}</h3>
                                <p class="text-white/80 text-sm">${slide.description}</p>
                              `;
                              
                              modal.appendChild(img);
                              modal.appendChild(caption);
                              document.body.appendChild(modal);
                            }}
                          >
                            <CardContent className="flex aspect-[3/2] items-center justify-center p-0 relative">
                              <Image
                                src={slide.image}
                                alt={slide.title}
                                width={900}
                                height={600}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-semibold">{slide.title}</h3>
                                <p className="text-white/80 text-sm">{slide.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </motion.div>

              {/* Download Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="border-2 border-emerald-200 bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Download Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Version:</span>
                        <Badge className="bg-emerald-600 text-white">
                          v{appDetails.version}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">File Size:</span>
                        <span className="font-medium">{appDetails.fileSize}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Last Updated:</span>
                        <span className="font-medium">{appDetails.lastUpdated}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Platform:</span>
                        <span className="font-medium mb-4 block">Windows (32-bit & 64-bit)</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDownload("installer")}
                      disabled={isDownloading}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                    >
                      💾 Download Installer (.exe)
                    </Button>

                    <Button
                      onClick={() => handleDownload("portable")}
                      disabled={isDownloading}
                      className="bg-purple-600 hover:bg-indigo-700 text-white w-full mt-4"
                    >
                      📦 Download Portable (.exe)
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* Features Section */}
      <FullWidthSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful tools to help you understand and navigate your codebase
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                      <feature.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </FullWidthSection>


      {/* Video Gallery Section */}
    
      {/* <FullWidthSection className="py-20" backgroundColor="bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See It In Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Watch demonstrations of Code-Analyzer Studio's powerful features
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6">
              
              <div className="lg:col-span-3">
                <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg border-2 border-slate-200">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`absolute inset-0 transition-opacity duration-300 ${activeVideo === video.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="space-y-4">
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveVideo(video.id)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${activeVideo === video.id ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className="relative pt-[56.25%]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-semibold text-slate-900">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FullWidthSection> */}


       <FullWidthSection className="py-20 sticky top-0 z-0" backgroundColor="bg-emerald-50/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See It In Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Watch demonstrations of Code-Analyzer Studio's powerful features
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Main Video Player */}
              <div className="lg:col-span-3">
                <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg border-2 border-slate-200">
                  {/* Find the active video to display */}
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`absolute inset-0 transition-opacity duration-300 ${activeVideo === video.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=${activeVideo === video.id ? 1 : 0}&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="space-y-4">
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveVideo(video.id)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${activeVideo === video.id ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className="relative pt-[56.25%]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          {/* Play button SVG */}
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-semibold text-slate-900">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FullWidthSection>


      {/* Installation Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Installation Guide</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Get started with Code-Analyzer Studio in just a few simple steps
              </p>
            </motion.div>

            <div className="space-y-4">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full">
                    <span className="text-emerald-600 font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <FullWidthSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">System Requirements</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ensure your system meets these requirements for optimal performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Minimum Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Windows 8, 10, and 11 (32-bit & 64-bit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Compatible with Intel Pentium, Celeron, Atom, Core (i3 and above), and AMD Athlon or equivalent processors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">2GB RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">100MB available storage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Recommended Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Windows 10, and 11 (32-bit & 64-bit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Intel Core i3 (3rd Gen or later)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">4GB RAM or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">200MB available storage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* CTA Section */}
      <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Download Code-Analyzer Studio today and take control of your project structure
            </p>

            <Button
              onClick={() => handleDownload("installer")}
              disabled={isDownloading}
              className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
            >
              💾 Download Installer (.exe)
            </Button>

            <Button
              onClick={() => handleDownload("portable")}
              disabled={isDownloading}
              className="bg-purple-600 hover:bg-indigo-700 text-white w-full mt-4"
            >
              📦 Download Portable (.exe)
            </Button>
          </motion.div>
        </div>
      </FullWidthSection>

      <WhatsAppFloat />
    </div>
  )
}