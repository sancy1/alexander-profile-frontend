
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
  fileSize: "13.5 MB",
  lastUpdated: "June 26, 2025",
  installUrl: "/downloads/CodeAnalyzer_Setup.exe",
  portableUrl: "/downloads/Code_Analyzer.exe"
}

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
    title: "Customizable Display",
    description: "Adjust colors, layouts and display options to suit your preferences",
    icon: Settings,
  },
]

// Installation steps
const installationSteps = [
  {
    step: 1,
    title: "Download the installer",
    description: "Click the download button to get the .exe file",
  },
  {
    step: 2,
    title: "Run the installer",
    description: "Double-click the downloaded file to begin installation",
  },
  {
    step: 3,
    title: "Follow the prompts",
    description: "Complete the installation wizard with your preferences",
  },
  {
    step: 4,
    title: "Launch the app",
    description: "Start using CodeMap Studio from your desktop or start menu",
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



// export default function DownloadPage() {
//   const [isDownloading, setIsDownloading] = useState(false)

//   const handleDownload = () => {
//     setIsDownloading(true)
//     // Simulate download delay
//     setTimeout(() => {
//       const link = document.createElement("a")
//       link.href = appDetails.downloadUrl
//       link.download = `CodeAnalyzerStudio_${appDetails.version}.exe`
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)
//       setIsDownloading(false)
//     }, 1500)
//   }


export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false)

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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <FullWidthSection className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-emerald-50">
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
                <Carousel className="w-full max-w-2xl mx-auto"> {/* Increased max-width */}
                <CarouselContent>
                    {appSlides.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <div className="p-1">
                        <Card 
                            className="overflow-hidden border-2 border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => {
                            // Create full screen image viewer
                            const modal = document.createElement('div');
                            modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
                            modal.onclick = () => document.body.removeChild(modal);
                            
                            const img = document.createElement('img');
                            img.src = slide.image;
                            img.alt = slide.title;
                            img.className = 'max-w-full max-h-full object-contain';
                            
                            const caption = document.createElement('div');
                            caption.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center';
                            caption.innerHTML = `
                                <h3 class="text-white font-semibold text-xl">${slide.title}</h3>
                                <p class="text-white/80">${slide.description}</p>
                            `;
                            
                            modal.appendChild(img);
                            modal.appendChild(caption);
                            document.body.appendChild(modal);
                            }}
                        >
                            <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={1000}  // Increased resolution
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

            {/* Download Info (unchanged) */}
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
                        <span className="font-medium">Windows (64-bit)</span>
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


                    {/* <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    size="lg"
                    className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                    {isDownloading ? (
                        <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Downloading...
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Now
                        </div>
                    )}
                    </Button> */}

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
                      <span className="text-slate-700">Windows 10 (64-bit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Intel Core i3 or equivalent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">4GB RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">200MB available storage</span>
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
                      <span className="text-slate-700">Windows 11 (64-bit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">Intel Core i5 or better</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">8GB RAM or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">500MB available storage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* CTA Section */}
      <FullWidthSection className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900">
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
              Download CodeMap Studio today and take control of your project structure
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

            {/* <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="lg"
              className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3 text-lg font-medium"
            >
              {isDownloading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                  Downloading...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Now (v{appDetails.version})
                </div>
              )}
            </Button> */}


          </motion.div>
        </div>
      </FullWidthSection>

      <WhatsAppFloat />
    </div>
  )
}