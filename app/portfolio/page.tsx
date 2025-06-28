
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, ShoppingCart, Code, Database, Brain, Monitor } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import Image from "next/image"
import HeroSection from "@/components/HeroSection";
import Link from 'next/link';
import { FullWidthSection } from "@/components/full-width-section"
import { useResumeActions } from "@/hooks/use-resume-actions";

const filterCategories = [
  { name: "All", value: "all", icon: Filter },
  { name: "E-commerce", value: "ecommerce", icon: ShoppingCart },
  { name: "AI/ML", value: "ai", icon: Brain },
  { name: "Full-Stack", value: "fullstack", icon: Code },
  // { name: "Data Analysis", value: "data", icon: Database },
  // { name: "Frontend", value: "frontend", icon: Monitor },
  { name: "Desktop", value: "desktop", icon: Monitor },
]

const projects = [
  {
    id: 1,
    title: "Artisans Handcraft",
    description:
      "A dynamic e-commerce platform designed to showcase artisanal crafted items, allowing users to browse artisan stores and profiles, and place orders seamlessly. Features include user authentication, product catalog, shopping cart, order management, and payment integration.",
    image: "/images/portfolio/handcrafted.png?height=400&width=400",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Prisma", "Full-Stack"],
    categories: ["ecommerce", "fullstack"],
    status: "In Development",
    hostedOn: "Vercel | Visit website >",
    demoUrl: "https://handcrafted-gamma.vercel.app",
    githubUrl: "#",
    downloadPageUrl: "#", // Add this line
    featured: true,
  },
  {
    id: 2,
    title: "AI Builder",
    description:
      "An innovative application empowering developers with rapid and efficient application development through AI-driven prompt and code generation, alongside other rich features. Includes project templates, code suggestions, and automated documentation generation.",
    image: "/images/portfolio/AIbuilder.png?height=300&width=400",
    tags: ["Next.js", "PostgreSQL", "Django", "ML/AI", "Tailwind", "Full-Stack"],
    categories: ["ai", "fullstack"],
    status: "In Development",
    hostedOn: "Vercel",
    demoUrl: "#",
    githubUrl: "#",
    downloadPageUrl: "portfolio/download/", // Add this line
    featured: true,
  },
  // {
  //   id: 3,
  //   title: "Financial Analytics Dashboard",
  //   description:
  //     "A comprehensive financial analysis tool that provides real-time insights, predictive modeling, and interactive visualizations for investment decision-making. Features include portfolio tracking, risk assessment, and automated reporting.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Python", "Pandas", "SQL", "Dashboard", "Analytics"],
  //   categories: ["data", "fullstack"],
  //   status: "Completed",
  //   hostedOn: "AWS",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
    {
    id: 3,
    title: "Code-Analyzer Studio",
    description:
      "A modern developer tool that lets users upload a project folder, auto-generate a visual file map, and explore each file with its actual code displayed.",
    image: "/images/portfolio/code-map.png?height=300&width=400",
    tags: ["Python", "TTKBootstrap", "tkinter", "PIL"],
    categories: ["ai", "desktop"],
    status: "Completed",
    hostedOn: "Nuitka | Downlodable >",
    demoUrl: "portfolio/download/codeanalyzer",
    githubUrl: "#",
    downloadPageUrl: "portfolio/download/codeanalyzer", // Add this line
    featured: false,
  },
  // {
  //   id: 4,
  //   title: "Task Automation Suite",
  //   description:
  //     "A collection of intelligent automation tools designed to streamline repetitive business processes. Includes web scraping, data processing, email automation, and report generation capabilities.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Python", "Selenium", "Automation", "Data Processing"],
  //   categories: ["data", "ai"],
  //   status: "Completed",
  //   hostedOn: "Self-hosted",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
  {
    id: 4,
    title: "Modern Portfolio Website",
    description:
      "A responsive and interactive portfolio website built with modern web technologies. Features smooth animations, optimized performance across all devices.",
    image: "/images/portfolio/profile.png?height=300&width=400",
    tags: ["Django", "Next.js", "PostgreSQL", "Tailwind", "Framer Motion"],
    categories: ["fullstack", "fullstack"],
    status: "In Development",
    hostedOn: "Vercel | Visit website >",
    demoUrl: "https://www.alexandercyril.xyz",
    githubUrl: "#",
    downloadPageUrl: "https://www.alexandercyril.xyz", // Add this line
    featured: false,
  },
  // {
  //   id: 6,
  //   title: "ML Prediction Engine",
  //   description:
  //     "A machine learning system that analyzes historical data to predict future trends and outcomes. Includes data preprocessing, model training, validation, and real-time prediction capabilities.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Python", "Scikit-learn", "ML", "Data Science"],
  //   categories: ["ai", "data"],
  //   status: "Completed",
  //   hostedOn: "Google Cloud",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },

    {
    id: 5,
    title: "AI Web Scraper Pro",
    description:
      "AI Web Scraper Pro, an advanced desktop application meticulously crafted to revolutionize how you gather information from the internet.",
    image: "/images/portfolio/webscraper.png?height=300&width=400",
    tags: ["Python", "TTkbootstrap", "Nltk", "BeautifulSoup", "Pandas"],
    categories: ["ai", "desktop"],
    status: "Completed",
    hostedOn: "Nuitka | Downlodable >",
    demoUrl: "portfolio/download/webscraper",
    githubUrl: "#",
    downloadPageUrl: "portfolio/download/webscraper", // Add this line
    featured: false,
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const { downloadResume, viewResume } = useResumeActions();

  const handleFilterChange = (filterValue: string) => {
    setActiveFilter(filterValue)
    if (filterValue === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.categories.includes(filterValue)))
    }
  }

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
        <HeroSection
          imageSrc="/images/slider/Theme1.jpg"
          imageAlt="Services Section"
          title={
            <h1 className="text-4xl md:text-6xl text-white mb-6">
              My <span className="text-emerald-300">Portfolio</span>
            </h1>
          }
            subtitle="A showcase of innovative projects that demonstrate technical expertise and creative problem-solving"
          />

      {/* Featured Projects */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Highlighting my most impactful and innovative work
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <Card className="h-full border-2 border-emerald-200 bg-emerald-50 transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={
                      project.status === "Completed" ? "bg-emerald-600 text-white" : "bg-orange-600 text-white"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Hosted on {project.hostedOn}</span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      asChild
                    >
                      {project.demoUrl ? (
                        <a 
                          href={project.demoUrl} 
                          target={project.demoUrl.startsWith('http') ? "_blank" : undefined}
                          rel={project.demoUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      ) : (
                        <span>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </span>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      asChild
                    >
                      {project.githubUrl ? (
                        <a 
                          href={project.githubUrl} 
                          target={project.githubUrl.startsWith('http') ? "_blank" : undefined}
                          rel={project.githubUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      ) : (
                        <span>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* All Projects with Filters */}
      <FullWidthSection className="py-20 bg-slate-50 -mt-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Explore my complete portfolio across different technologies and domains
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeFilter === category.value ? "default" : "outline"}
                  onClick={() => handleFilterChange(category.value)}
                  className={`${
                    activeFilter === category.value
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "text-slate-600 hover:text-emerald-600 border-emerald-600"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>


      <AnimatePresence>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {filteredProjects.map((project, index) => (
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Card className="h-full border-2 transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-300">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <Badge
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={
                    project.status === "Completed" ? "bg-emerald-600 text-white" : "bg-orange-600 text-white"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>

              <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <Badge key={tagIndex} className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{project.hostedOn}</span>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs px-2 py-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    asChild
                  >
                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl} 
                        target={project.demoUrl.startsWith('http') ? "_blank" : undefined}
                        rel={project.demoUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs px-2 py-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    asChild
                  >
                    {project.githubUrl ? (
                      <a 
                        href={project.githubUrl} 
                        target={project.githubUrl.startsWith('http') ? "_blank" : undefined}
                        rel={project.githubUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>
                        <Github className="w-3 h-3" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</AnimatePresence>
    </div>
    </FullWidthSection> {/* Closing section tag */}
      

      {/* Call to Action */}
      <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Let's discuss how we can bring your next project to life with innovative solutions and cutting-edge
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3">
                Start a Project
              </Button>
              </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
                  onClick={viewResume}
                >
                  View Resume
                </Button>

            </div>
          </motion.div>
        </div>
      </FullWidthSection>

      {/* <Footer /> */}
      <WhatsAppFloat />
    </div>
  )
}



























