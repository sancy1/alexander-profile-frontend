"use client"

import { motion } from "framer-motion"
import { Download, Eye, Code, Database, Brain, Settings, Award, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import HeroSection from "@/components/HeroSection";
import Link from 'next/link';
import { FullWidthSection } from "@/components/full-width-section"


const technicalSkills = [
  {
    category: "Full-Stack Development",
    skills: ["C# (ASP.NET Core)", "Python (Django, FastAPI)", "JavaScript/TypeScript (Node.js, Express.js, Next.js, React)", "Tailwind CSS"],
    icon: Code,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    category: "Backend & Databases",
    skills: ["REST API Development", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis (caching & message brokering)"],
    icon: Database,
    color: "bg-green-50 border-green-200",
  },
  {
    category: "Machine Learning & AI",
    skills: ["Machine Learning & Deep Learning", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV (computer vision)", "NLP (NLTK, Hugging Face, Transformers)", "LLMs (Large Language Models)"],
    icon: Brain,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    category: "Data Analysis & Manipulation",
    skills: ["Pandas", "NumPy", "Excel", "Google Sheets"],
    icon: Settings,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    category: "Web Scraping & Automation",
    skills: ["Selenium", "BeautifulSoup", "Playwright", "Scrapy", "Custom automation scripts (Python)", "Task orchestration with Celery", "Intelligent Web Scrapers (AI-powered)"],
    icon: Settings,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    category: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
    icon: Settings,
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    category: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Trello", "Jira", "Trello", "Asana", "CI/CD Pipelines (GitHub Actions, Jenkins)"],
    icon: Settings,
    color: "bg-emerald-50 border-emerald-200",
  },
  
]

const mainExpertise = [
  "Software Development (Backend and Frontend)",
  "Machine Learning and AI",
  "Task Automation",
  "Data Analysis",
  "Data Scraping",
  "Database Development",
]

const education = [
  {
    degree: "Bachelor's Degree in Software Development",
    institution: "Brigham Young University – Idaho",
    status: "In Progress",
    year: "2023 - Present",
    icon: GraduationCap,
  },
  {
    degree: "Applied Associate Degree in Software Development",
    institution: "Brigham Young University – Idaho",
    status: "In Progress",
    year: "2025",
    icon: Award,
  },
  {
    degree: "Machine Learning Certification",
    institution: "Coursera/Udemy",
    status: "In Progress",
    year: "2025",
    icon: Award,
  },
  // {
  //   degree: "Database Design and Management",
  //   institution: "Brigham Young University – Idaho",
  //   status: "Completed",
  //   year: "2024",
  //   icon: Award,
  // },
   {
    degree: "Certificate in Web and Computer Programming",
    institution: "Brigham Young University – Idaho",
    status: "Completed",
    year: "2024",
    icon: Award,
  },
  {
    degree: "Certificate in Web Development",
    institution: "Brigham Young University – Idaho",
    status: "Completed",
    year: "2023",
    icon: Award,
  },
]

export default function ResumePage() {
  const handleViewResume = () => {
    // This would open the PDF resume in a new tab or embedded viewer
    window.open("/resume.pdf", "_blank")
  }

  const handleDownloadResume = () => {
    // This would trigger a download of the resume PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Alexander_Cyril_Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
        <HeroSection
          imageSrc="/images/slider/Resume1.jpg"
          imageAlt="Services Section"
            title={
              <h1 className="text-4xl md:text-6xl text-white mb-6">
                Professional <span className="text-emerald-300">Resume</span>
                </h1>
              }
                subtitle="Comprehensive overview of my technical expertise and professional qualifications"
          />

      {/* Hero Section */}
      <FullWidthSection
  backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100" // ⭐ Moved the gradient here ⭐
  className="py-4 md:py-4 relative z-10 h-full flex items-center" // ⭐ Kept content-specific classes here ⭐
>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleViewResume}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              >
                <Eye className="mr-2 w-5 h-5" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </FullWidthSection>



      {/* Technical Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive skill set across modern technologies and frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card
                  className={`h-full ${skillGroup.color} border-2 transition-all duration-300 group-hover:shadow-xl`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <skillGroup.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Expertise */}
      <FullWidthSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Primary areas of expertise and specialization</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {mainExpertise.map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-emerald-600 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">{expertise}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Academic background and professional certifications
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 group-hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
                            <div className="flex gap-2 mt-2 sm:mt-0">
                              <Badge
                                variant={item.status === "Completed" ? "default" : "secondary"}
                                className={
                                  item.status === "Completed" ? "bg-green-600 text-white" : "bg-gray-600 text-white"
                                }
                              >
                                {item.status}
                              </Badge>
                              <Badge variant="outline" className="border-emerald-600 text-emerald-600">
                                {item.year}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-slate-600">{item.institution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Actions */}
      <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Download my complete resume or get in touch to discuss how my skills can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleDownloadResume}
                className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Full Resume
              </Button>

              <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
              >
                Let's Innovate Together
              </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </FullWidthSection>

      {/* <Footer /> */}
      <WhatsAppFloat />
    </div>
  )
}
