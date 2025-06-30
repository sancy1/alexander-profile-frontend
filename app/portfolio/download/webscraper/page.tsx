
// app/portfolio/download/webscraper/page.tsx

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
  name: "AI Webscraper Pro",
  version: "1.9.0",
  fileSize: "88.5 MB",
  lastUpdated: "June 28, 2025",
  installUrl: "/downloads/AI_Webscraper_Setup.exe",
  portableUrl: "/downloads/AI_Webscraper.exe"
}

// Features list
const features = [
  {
    title: " Deep Link Analysis",
    description: "Allows you to define scraping depth, enabling the application to traverse multiple levels of links from a starting URL, ensuring comprehensive data collection.",
    icon: Smartphone,
  },
  {
    title: "AI-Powered Enhancements",
    description: "Integrates Artificial Intelligence and Machine Learning to refine the scraping process. Identifies and extracts key entities (like names, organizations, locations) from text, providing structured insights.",
    icon: Settings,
  },
  {
    title: "Smart Content Filtering",
    description: "Automatically identifies and filters out irrelevant or low-quality content, ensuring you collect only valuable data. Understanding the emotional tone of text and generating concise summaries, providing deeper analytical power.",
    icon: ArrowRight,
  },
  {
    title: "Flexible Export Formats",
    description: "Exports your extracted data into multiple convenient formats, including plain text (.txt), Word documents (.docx), Excel spreadsheets (.xlsx), PDF documents (.pdf), and PowerPoint presentations (.pptx)",
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
      "Start using AI Webscraper Pro today and enjoy the indispensable tool in your data acquisition toolkit.",
  },
]


// App screenshot slides
const appSlides = [
  {
    id: 1,
    title: "Main Interface",
    description: "The clean and intuitive main dashboard of the application",
    image: "/images/portfolio/webscraper.png",
  },
  {
    id: 2,
    title: "Scraping option",
    description: "Provides multiple scraping options.",
    image: "/images/portfolio/Scraping_option.png",
  },
  {
    id: 3,
    title: "Scraping progress",
    description: "Display scraping progess.",
    image: "/images/portfolio/Scraping_progress.png",
  },
  {
    id: 4,
    title: "Scraping export",
    description: "Export settings",
    image: "/images/portfolio/Scraping_export.png",
  },
]


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
        ? `AI_Webscraper_${appDetails.version}_Installer.exe`
        : `AI_Webscraper_${appDetails.version}_Portable.exe`

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
                Download <span className="text-emerald-600">AI Web Scraper Pro</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Advanced web scraping tool powered by AI and Machine Learning
                Extract data with precision • Multiple formats • Deep link analysis • Smart content detection
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
                        {/* EVERYTHING BELOW REMAINS EXACTLY AS IN YOUR ORIGINAL CODE */}
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
              An intelligent tool capable of diverse content extraction such as: text, images, documents (PDF, DOCX)
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


      

{/* Video Demonstration Section */}
<FullWidthSection className="py-20 backdrop-blur-[2px]" backgroundColor="bg-emerald-50/40">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Video Demonstration</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See AI Web Scraper Pro in action with this comprehensive walkthrough
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto">
      <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg border-2 border-slate-200 bg-white">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/7tazyiVp-0c"
          title="AI Web Scraper Pro Demonstration"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">AI Web Scraper Pro Full Walkthrough</h3>
        <p className="text-slate-600">
          Learn how to extract, analyze, and export web data with our powerful AI-powered tool
        </p>
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
                Get started with AI Web Srcaper in just a few simple steps
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
                      <span className="text-slate-700">4GB RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">300MB available storage</span>
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
                      <span className="text-slate-700">8GB RAM or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">400MB available storage</span>
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
              Are you in need of intelligent partner? Download AI Web Scraper Pro today and get the help you need to efficiently extract, analyze, and utilize web-based information.
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