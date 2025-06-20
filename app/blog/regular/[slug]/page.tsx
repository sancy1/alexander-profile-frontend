// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import {
//   Calendar,
//   Clock,
//   Share2,
//   Bookmark,
//   ThumbsUp,
//   ThumbsDown,
//   Eye,
//   Tag,
//   ChevronRight,
//   User,
//   ChevronLeft,
//   TrendingUp,
//   Flame,
// } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import Image from "next/image"
// import Link from "next/link"

// // Mock blog post data for regular blog
// const regularBlogPost = {
//   id: 7,
//   title: "The Future of Remote Work: Trends and Technologies Shaping 2024",
//   slug: "future-remote-work-trends-technologies-2024",
//   content: `
// # The Future of Remote Work: Trends and Technologies Shaping 2024

// The landscape of work has fundamentally changed over the past few years, and remote work has evolved from a temporary necessity to a permanent fixture in the modern workplace. As we navigate through 2024, new trends and technologies are emerging that will define how we work, collaborate, and maintain productivity in distributed teams.

// ## The Evolution of Remote Work Culture

// Remote work is no longer just about working from home. It's about creating flexible, inclusive, and productive work environments that transcend geographical boundaries. Companies are realizing that the future isn't just remote or in-office—it's hybrid, flexible, and employee-centric.

// ### Key Statistics That Tell the Story

// Recent studies show that 42% of the U.S. workforce now works remotely full-time, while 35% work in hybrid arrangements. This shift represents the largest change in work patterns since the industrial revolution.

// ## Emerging Technologies Transforming Remote Work

// ### Virtual Reality and Metaverse Workspaces

// Virtual reality is moving beyond gaming into professional environments. Companies like Meta, Microsoft, and emerging startups are creating immersive workspaces where remote teams can collaborate as if they're in the same room.

// **Benefits of VR Workspaces:**
// - Enhanced collaboration through spatial presence
// - Reduced video call fatigue
// - More engaging team meetings and presentations
// - Better onboarding experiences for new employees

// ### AI-Powered Productivity Tools

// Artificial intelligence is revolutionizing how we approach remote work productivity. From smart scheduling assistants to automated meeting summaries, AI is helping remote workers focus on what matters most.

// **Popular AI Tools for Remote Teams:**
// - **Notion AI**: Intelligent note-taking and content generation
// - **Calendly**: Smart scheduling with AI optimization
// - **Otter.ai**: Automated meeting transcription and summaries
// - **Grammarly**: AI-powered writing assistance

// ## The Psychology of Remote Work

// Working remotely isn't just about technology—it's about understanding human psychology and creating environments that support mental health, creativity, and collaboration.

// ### Combating Remote Work Isolation

// One of the biggest challenges remote workers face is isolation. Companies are implementing innovative solutions:

// - **Virtual coffee breaks**: Scheduled informal video calls
// - **Digital water cooler spaces**: Slack channels for casual conversation
// - **Remote team building activities**: Online games, virtual escape rooms
// - **Coworking stipends**: Allowances for working from shared spaces

// ### Maintaining Work-Life Balance

// The line between work and personal life has blurred significantly. Successful remote workers are those who establish clear boundaries and routines.

// **Effective Strategies:**
// 1. **Dedicated workspace**: Even if it's just a corner of a room
// 2. **Consistent schedule**: Start and end times that you stick to
// 3. **Regular breaks**: Using techniques like the Pomodoro method
// 4. **Physical activity**: Incorporating movement into your day

// ## The Future Workplace: Predictions for 2025 and Beyond

// ### Hybrid-First Companies

// The future belongs to companies that are "hybrid-first"—designed from the ground up to support both remote and in-office work seamlessly. This means:

// - **Flexible office spaces**: Designed for collaboration rather than individual work
// - **Equal participation**: Ensuring remote workers have the same opportunities as in-office colleagues
// - **Technology integration**: Seamless tools that work across all environments

// ### The Rise of Digital Nomadism

// As remote work becomes more accepted, we're seeing the rise of digital nomadism. Countries are creating digital nomad visas, and companies are adapting their policies to support employees who want to work while traveling.

// **Popular Digital Nomad Destinations:**
// - Portugal (D7 Visa)
// - Estonia (Digital Nomad Visa)
// - Barbados (Welcome Stamp)
// - Dubai (Virtual Working Programme)

// ## Challenges and Solutions

// ### Communication Overload

// With the shift to remote work, many teams have experienced communication overload—too many meetings, messages, and notifications.

// **Solutions:**
// - **Asynchronous communication**: Not everything needs to be a meeting
// - **Communication protocols**: Clear guidelines on when to use different channels
// - **Focus time**: Designated hours for deep work without interruptions

// ### Cybersecurity Concerns

// Remote work has expanded the attack surface for cybersecurity threats. Companies are investing heavily in:

// - **Zero-trust security models**: Verify everything, trust nothing
// - **VPN and secure connections**: Protecting data in transit
// - **Employee training**: Regular cybersecurity awareness programs
// - **Multi-factor authentication**: Adding layers of security

// ## Building Remote-First Culture

// Creating a successful remote-first culture requires intentional effort and the right strategies:

// ### Communication Excellence

// - **Over-communicate**: Better to share too much information than too little
// - **Document everything**: Create searchable knowledge bases
// - **Regular check-ins**: Both formal and informal touchpoints
// - **Cultural rituals**: Virtual all-hands, team celebrations, recognition programs

// ### Performance Management

// Remote work requires a shift from measuring hours worked to measuring outcomes achieved:

// - **Goal-oriented metrics**: Focus on deliverables and results
// - **Regular feedback**: More frequent, shorter performance conversations
// - **Career development**: Ensuring remote employees have growth opportunities
// - **Recognition programs**: Celebrating achievements in virtual environments

// ## The Economic Impact

// Remote work is reshaping entire economies:

// ### Real Estate Markets

// - **Urban exodus**: People moving away from expensive city centers
// - **Suburban growth**: Increased demand for homes with office space
// - **Commercial real estate**: Reduced demand for traditional office space
// - **Co-working evolution**: Flexible spaces becoming more popular

// ### Global Talent Access

// Companies can now hire the best talent regardless of location, leading to:

// - **Increased competition**: For both employers and employees
// - **Salary equalization**: Gradual leveling of compensation across regions
// - **Skills development**: Greater emphasis on continuous learning

// ## Conclusion: Embracing the Remote Future

// The future of work is not about choosing between remote or in-office—it's about creating flexible, inclusive, and productive work environments that put employees first. Companies that embrace this shift and invest in the right technologies, cultures, and practices will be the ones that thrive in the years to come.

// As we continue to navigate this transformation, one thing is clear: remote work is not a temporary trend—it's the new reality. The question isn't whether your organization will adapt to remote work, but how quickly and effectively you can make the transition.

// The organizations that succeed will be those that view remote work not as a constraint to work around, but as an opportunity to reimagine what work can be in the 21st century.
// `,
//   coverImage: "/placeholder.svg?height=400&width=800",
//   author: {
//     name: "Alexander S. Cyril",
//     avatar: "/placeholder.svg?height=40&width=40",
//     bio: "Technology strategist and remote work advocate with over 8 years of experience building distributed teams and digital-first organizations.",
//   },
//   publishedAt: "2024-01-20",
//   updatedAt: "2024-01-21",
//   readTime: "12 min read",
//   category: "business",
//   tags: ["Remote Work", "Future of Work", "Technology", "Business Strategy", "Digital Transformation"],
//   likes: 89,
//   dislikes: 3,
//   comments: 24,
//   views: 2340,
//   saved: false,
//   liked: false,
//   disliked: false,
// }

// // Mock data for sidebar
// const recentPosts = [
//   {
//     id: 1,
//     title: "Building Scalable APIs with Django REST Framework",
//     slug: "building-scalable-apis-django-rest-framework",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     publishedAt: "2024-01-15",
//   },
//   {
//     id: 2,
//     title: "Machine Learning Model Deployment with Docker",
//     slug: "ml-model-deployment-docker",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     publishedAt: "2024-01-10",
//   },
//   {
//     id: 3,
//     title: "Next.js 14 App Router: Complete Guide",
//     slug: "nextjs-14-app-router-guide",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     publishedAt: "2024-01-05",
//   },
// ]

// const popularPosts = [
//   {
//     id: 3,
//     title: "Next.js 14 App Router: Complete Guide",
//     slug: "nextjs-14-app-router-guide",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     views: 1450,
//   },
//   {
//     id: 1,
//     title: "Building Scalable APIs with Django REST Framework",
//     slug: "building-scalable-apis-django-rest-framework",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     views: 1250,
//   },
//   {
//     id: 6,
//     title: "Advanced SQL Queries for Data Analysis",
//     slug: "advanced-sql-queries-data-analysis",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     views: 1100,
//   },
// ]

// const trendingPosts = [
//   {
//     id: 7,
//     title: "The Future of Remote Work: Trends and Technologies",
//     slug: "future-remote-work-trends-technologies-2024",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     views: 2340,
//   },
//   {
//     id: 3,
//     title: "Next.js 14 App Router: Complete Guide",
//     slug: "nextjs-14-app-router-guide",
//     thumbnail: "/placeholder.svg?height=60&width=60",
//     views: 1450,
//   },
// ]

// const allTags = [
//   "Remote Work",
//   "Future of Work",
//   "Technology",
//   "Business Strategy",
//   "Digital Transformation",
//   "Django",
//   "Python",
//   "API",
//   "REST",
//   "Backend",
//   "Machine Learning",
//   "Docker",
//   "Deployment",
//   "Next.js",
//   "React",
//   "JavaScript",
//   "Frontend",
//   "Full-Stack",
//   "Data Visualization",
//   "Matplotlib",
//   "Analytics",
//   "Tailwind CSS",
//   "CSS",
//   "Responsive Design",
//   "SQL",
//   "Database",
// ]

// const archiveData = [
//   { month: "January 2024", count: 8 },
//   { month: "December 2023", count: 6 },
//   { month: "November 2023", count: 4 },
//   { month: "October 2023", count: 5 },
// ]

// const relatedPosts = [
//   {
//     id: 8,
//     title: "Digital Transformation Strategies for Modern Businesses",
//     slug: "digital-transformation-strategies-modern-businesses",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "8 min read",
//   },
//   {
//     id: 9,
//     title: "Building High-Performance Remote Teams",
//     slug: "building-high-performance-remote-teams",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "10 min read",
//   },
//   {
//     id: 10,
//     title: "The Psychology of Productivity in Digital Workspaces",
//     slug: "psychology-productivity-digital-workspaces",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "7 min read",
//   },
// ]

// const comments = [
//   {
//     id: 1,
//     author: {
//       name: "Sarah Johnson",
//       avatar: "/placeholder.svg?height=32&width=32",
//     },
//     content:
//       "This is such an insightful piece! As someone who's been working remotely for 3 years, I can definitely relate to the challenges and benefits you've outlined. The VR workspace concept is particularly intriguing.",
//     createdAt: "2024-01-21T10:30:00Z",
//     likes: 8,
//     replies: [
//       {
//         id: 2,
//         author: {
//           name: "Alexander S. Cyril",
//           avatar: "/placeholder.svg?height=32&width=32",
//         },
//         content:
//           "Thank you, Sarah! VR workspaces are definitely going to be a game-changer. Have you tried any VR collaboration tools yet?",
//         createdAt: "2024-01-21T11:00:00Z",
//         likes: 3,
//       },
//     ],
//   },
//   {
//     id: 3,
//     author: {
//       name: "Mike Chen",
//       avatar: "/placeholder.svg?height=32&width=32",
//     },
//     content:
//       "Great analysis of the economic impact! The real estate market changes are already visible in my city. More people are moving to suburbs and smaller towns.",
//     createdAt: "2024-01-21T14:15:00Z",
//     likes: 5,
//     replies: [],
//   },
// ]

// // Navigation posts (previous/next)
// const navigationPosts = {
//   previous: {
//     id: 6,
//     title: "Advanced SQL Queries for Data Analysis",
//     slug: "advanced-sql-queries-data-analysis",
//   },
//   next: {
//     id: 8,
//     title: "Digital Transformation Strategies for Modern Businesses",
//     slug: "digital-transformation-strategies-modern-businesses",
//   },
// }

// export default function RegularBlogPostPage({ params }: { params: { slug: string } }) {
//   const [post, setPost] = useState(regularBlogPost)
//   const [newComment, setNewComment] = useState("")
//   const [readingProgress, setReadingProgress] = useState(0)
//   const [activeSection, setActiveSection] = useState("")
//   const [email, setEmail] = useState("")
//   const [isSubscribed, setIsSubscribed] = useState(false)
//   const [activePostType, setActivePostType] = useState("recent")

//   // Table of contents
//   const tableOfContents = [
//     { id: "evolution", title: "The Evolution of Remote Work Culture", level: 2 },
//     { id: "technologies", title: "Emerging Technologies Transforming Remote Work", level: 2 },
//     { id: "vr-workspaces", title: "Virtual Reality and Metaverse Workspaces", level: 3 },
//     { id: "ai-tools", title: "AI-Powered Productivity Tools", level: 3 },
//     { id: "psychology", title: "The Psychology of Remote Work", level: 2 },
//     { id: "isolation", title: "Combating Remote Work Isolation", level: 3 },
//     { id: "work-life-balance", title: "Maintaining Work-Life Balance", level: 3 },
//     { id: "future-workplace", title: "The Future Workplace: Predictions for 2025 and Beyond", level: 2 },
//     { id: "challenges", title: "Challenges and Solutions", level: 2 },
//     { id: "culture", title: "Building Remote-First Culture", level: 2 },
//     { id: "economic-impact", title: "The Economic Impact", level: 2 },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight
//       const progress = (scrollTop / docHeight) * 100
//       setReadingProgress(Math.min(progress, 100))

//       // Update active section for table of contents
//       const sections = tableOfContents.map((item) => document.getElementById(item.id)).filter(Boolean)
//       const currentSection = sections.find((section) => {
//         if (section) {
//           const rect = section.getBoundingClientRect()
//           return rect.top <= 100 && rect.bottom >= 100
//         }
//         return false
//       })

//       if (currentSection) {
//         setActiveSection(currentSection.id)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLike = () => {
//     setPost((prev) => ({
//       ...prev,
//       liked: !prev.liked,
//       disliked: false,
//       likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
//       dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes,
//     }))
//   }

//   const handleDislike = () => {
//     setPost((prev) => ({
//       ...prev,
//       disliked: !prev.disliked,
//       liked: false,
//       dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes + 1,
//       likes: prev.liked ? prev.likes - 1 : prev.likes,
//     }))
//   }

//   const handleSave = () => {
//     setPost((prev) => ({
//       ...prev,
//       saved: !prev.saved,
//     }))
//   }

//   const handleNewsletterSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (email.trim()) {
//       setIsSubscribed(true)
//       setEmail("")
//       setTimeout(() => setIsSubscribed(false), 3000)
//     }
//   }

//   const handleCommentSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (newComment.trim()) {
//       setNewComment("")
//     }
//   }

//   const sharePost = (platform: string) => {
//     const url = window.location.href
//     const title = post.title

//     switch (platform) {
//       case "twitter":
//         window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
//         break
//       case "linkedin":
//         window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
//         break
//       case "facebook":
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
//         break
//       case "copy":
//         navigator.clipboard.writeText(url)
//         break
//     }
//   }

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   const getCurrentPosts = () => {
//     switch (activePostType) {
//       case "popular":
//         return popularPosts
//       case "trending":
//         return trendingPosts
//       default:
//         return recentPosts
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Reading Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
//         <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${readingProgress}%` }} />
//       </div>

//       {/* Hero Section */}
//       <section className="pt-24 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto lg:max-w-7xl">
//             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               {/* Breadcrumb */}
//               <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
//                 <Link href="/blog" className="hover:text-emerald-600 transition-colors">
//                   Blog
//                 </Link>
//                 <ChevronRight className="w-4 h-4" />
//                 <span className="text-slate-900">{post.title}</span>
//               </nav>

//               {/* Category and Tags */}
//               <div className="flex flex-wrap items-center gap-2 mb-4">
//                 <Badge className="bg-emerald-600 text-white">{post.category}</Badge>
//                 {post.tags.map((tag, index) => (
//                   <Badge key={index} variant="outline" className="border-emerald-600 text-emerald-600">
//                     <Tag className="w-3 h-3 mr-1" />
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               {/* Title */}
//               <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

//               {/* Meta Information */}
//               <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8">
//                     <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
//                     <AvatarFallback>
//                       <User className="w-4 h-4" />
//                     </AvatarFallback>
//                   </Avatar>
//                   <span className="font-medium">{post.author.name}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Calendar className="w-4 h-4" />
//                   <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className="w-4 h-4" />
//                   <span>{post.readTime}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Eye className="w-4 h-4" />
//                   <span>{post.views} views</span>
//                 </div>
//               </div>

//               {/* Cover Image */}
//               <div className="relative overflow-hidden rounded-xl mb-8">
//                 <Image
//                   src={post.coverImage || "/placeholder.svg"}
//                   alt={post.title}
//                   width={800}
//                   height={400}
//                   className="w-full h-64 md:h-96 object-cover"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content with Sidebar */}
//       <section className="pb-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//               {/* Main Content */}
//               <div className="lg:col-span-3">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   className="prose prose-lg max-w-none"
//                 >
//                   {/* Article content */}
//                   <div className="space-y-8">
//                     <div id="evolution">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">The Evolution of Remote Work Culture</h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         Remote work is no longer just about working from home. It's about creating flexible, inclusive,
//                         and productive work environments that transcend geographical boundaries. Companies are realizing
//                         that the future isn't just remote or in-office—it's hybrid, flexible, and employee-centric.
//                       </p>
//                       <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Statistics That Tell the Story</h3>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         Recent studies show that 42% of the U.S. workforce now works remotely full-time, while 35% work
//                         in hybrid arrangements. This shift represents the largest change in work patterns since the
//                         industrial revolution.
//                       </p>
//                     </div>

//                     <div id="technologies">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">
//                         Emerging Technologies Transforming Remote Work
//                       </h2>

//                       <div id="vr-workspaces" className="mb-6">
//                         <h3 className="text-xl font-semibold text-slate-900 mb-3">
//                           Virtual Reality and Metaverse Workspaces
//                         </h3>
//                         <p className="text-slate-700 leading-relaxed mb-4">
//                           Virtual reality is moving beyond gaming into professional environments. Companies like Meta,
//                           Microsoft, and emerging startups are creating immersive workspaces where remote teams can
//                           collaborate as if they're in the same room.
//                         </p>
//                         <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-4">
//                           <h4 className="font-semibold text-slate-900 mb-2">Benefits of VR Workspaces:</h4>
//                           <ul className="list-disc list-inside text-slate-700 space-y-1">
//                             <li>Enhanced collaboration through spatial presence</li>
//                             <li>Reduced video call fatigue</li>
//                             <li>More engaging team meetings and presentations</li>
//                             <li>Better onboarding experiences for new employees</li>
//                           </ul>
//                         </div>
//                       </div>

//                       <div id="ai-tools">
//                         <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Powered Productivity Tools</h3>
//                         <p className="text-slate-700 leading-relaxed mb-4">
//                           Artificial intelligence is revolutionizing how we approach remote work productivity. From
//                           smart scheduling assistants to automated meeting summaries, AI is helping remote workers focus
//                           on what matters most.
//                         </p>
//                       </div>
//                     </div>

//                     <div id="psychology">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">The Psychology of Remote Work</h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         Working remotely isn't just about technology—it's about understanding human psychology and
//                         creating environments that support mental health, creativity, and collaboration.
//                       </p>
//                     </div>

//                     <div id="future-workplace">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">
//                         The Future Workplace: Predictions for 2025 and Beyond
//                       </h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         The future belongs to companies that are "hybrid-first"—designed from the ground up to support
//                         both remote and in-office work seamlessly.
//                       </p>
//                     </div>

//                     <div id="challenges">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">Challenges and Solutions</h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         With the shift to remote work, many teams have experienced communication overload—too many
//                         meetings, messages, and notifications.
//                       </p>
//                     </div>

//                     <div id="culture">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">Building Remote-First Culture</h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         Creating a successful remote-first culture requires intentional effort and the right strategies.
//                       </p>
//                     </div>

//                     <div id="economic-impact">
//                       <h2 className="text-2xl font-bold text-slate-900 mb-4">The Economic Impact</h2>
//                       <p className="text-slate-700 leading-relaxed mb-6">
//                         Remote work is reshaping entire economies, from real estate markets to global talent access.
//                       </p>
//                     </div>

//                     <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
//                       <h3 className="text-xl font-bold text-slate-900 mb-4">Conclusion: Embracing the Remote Future</h3>
//                       <p className="text-slate-700 leading-relaxed">
//                         The future of work is not about choosing between remote or in-office—it's about creating
//                         flexible, inclusive, and productive work environments that put employees first. The
//                         organizations that succeed will be those that view remote work not as a constraint to work
//                         around, but as an opportunity to reimagine what work can be in the 21st century.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Mobile Engagement Bar */}
//                 <div className="lg:hidden mt-8 p-4 bg-slate-50 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <div className="flex gap-4">
//                       <Button
//                         variant={post.liked ? "default" : "outline"}
//                         size="sm"
//                         onClick={handleLike}
//                         className={post.liked ? "bg-emerald-600 text-white" : ""}
//                       >
//                         <ThumbsUp className="w-4 h-4 mr-1" />
//                         {post.likes}
//                       </Button>
//                       <Button
//                         variant={post.disliked ? "default" : "outline"}
//                         size="sm"
//                         onClick={handleDislike}
//                         className={post.disliked ? "bg-red-600 text-white" : ""}
//                       >
//                         <ThumbsDown className="w-4 h-4 mr-1" />
//                         {post.dislikes}
//                       </Button>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button variant="outline" size="sm" onClick={handleSave}>
//                         <Bookmark className={`w-4 h-4 ${post.saved ? "fill-current text-emerald-600" : ""}`} />
//                       </Button>
//                       <Button variant="outline" size="sm">
//                         <Share2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar - Desktop Only */}
//               <div className="lg:col-span-1 hidden lg:block">
//                 <div className="space-y-6 lg:sticky lg:top-24">
//                   {/* Popular Posts */}
//                   <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
//                     <CardHeader className="pb-4">
//                       <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
//                         <div className="p-2 bg-orange-100 rounded-lg">
//                           <Flame className="w-5 h-5 text-orange-600" />
//                         </div>
//                         Popular Posts
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {[
//                           {
//                             title: "The Future of Remote Work: Complete Analysis",
//                             slug: "future-remote-work-trends-technologies-2024",
//                             image: "/placeholder.svg?height=80&width=80",
//                             views: "2.4k",
//                             category: "Business",
//                             gradient: "from-blue-500 to-purple-600",
//                           },
//                           {
//                             title: "Next.js 14 App Router: Complete Guide",
//                             slug: "nextjs-14-app-router-guide",
//                             image: "/placeholder.svg?height=80&width=80",
//                             views: "1.8k",
//                             category: "Frontend",
//                             gradient: "from-green-500 to-emerald-600",
//                           },
//                           {
//                             title: "Building Scalable APIs with Django",
//                             slug: "building-scalable-apis-django-rest-framework",
//                             image: "/placeholder.svg?height=80&width=80",
//                             views: "1.5k",
//                             category: "Backend",
//                             gradient: "from-pink-500 to-rose-600",
//                           },
//                         ].map((post, index) => (
//                           <Link key={index} href={`/blog/regular/${post.slug}`}>
//                             <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer">
//                               <div className="flex gap-3">
//                                 <div className="relative">
//                                   <Image
//                                     src={post.image || "/placeholder.svg"}
//                                     alt={post.title}
//                                     width={80}
//                                     height={80}
//                                     className="w-20 h-20 object-cover rounded-lg shadow-sm"
//                                   />
//                                   <div className="absolute -top-1 -right-1">
//                                     <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
//                                       #{index + 1}
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                   <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
//                                     {post.title}
//                                   </h4>
//                                   <div className="flex items-center gap-2 mb-2">
//                                     <Badge
//                                       variant="outline"
//                                       className="text-xs border-orange-200 text-orange-700 bg-orange-50"
//                                     >
//                                       {post.category}
//                                     </Badge>
//                                   </div>
//                                   <div className="flex items-center gap-1 text-xs text-slate-500">
//                                     <TrendingUp className="w-3 h-3 text-orange-500" />
//                                     <span className="font-medium text-orange-600">{post.views} views</span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                       <Link href="/blog?sort=popular">
//                         <Button
//                           variant="outline"
//                           className="w-full mt-4 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
//                         >
//                           <Flame className="w-4 h-4 mr-2" />
//                           View All Popular Posts
//                         </Button>
//                       </Link>
//                     </CardContent>
//                   </Card>

//                   {/* Categories */}
//                   <Card className="shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-slate-900">Category</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-3">
//                         {[
//                           { name: "Frontend", count: 12, color: "bg-purple-500" },
//                           { name: "Backend", count: 8, color: "bg-orange-500" },
//                           { name: "DevOps", count: 6, color: "bg-green-500" },
//                           { name: "Design", count: 4, color: "bg-pink-500" },
//                           { name: "Business", count: 10, color: "bg-blue-500" },
//                         ].map((category, index) => (
//                           <Link key={index} href={`/blog?category=${category.name}`}>
//                             <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                               <div className="flex items-center gap-3">
//                                 <div className={`w-4 h-4 rounded ${category.color}`}></div>
//                                 <span className="font-medium text-slate-900">{category.name}</span>
//                               </div>
//                               <Badge variant="secondary" className="bg-slate-100 text-slate-600">
//                                 {category.count}
//                               </Badge>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Recent Posts */}
//                   <Card className="shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-slate-900">Recent Posts</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {[
//                           {
//                             title: "The Future of Remote Work: Trends and Technologies",
//                             slug: "future-remote-work-trends-technologies-2024",
//                             image: "/placeholder.svg?height=80&width=80",
//                             date: "Jan 20, 2024",
//                             category: "Business",
//                           },
//                           {
//                             title: "Building Scalable APIs with Django",
//                             slug: "building-scalable-apis-django-rest-framework",
//                             image: "/placeholder.svg?height=80&width=80",
//                             date: "Jan 15, 2024",
//                             category: "Backend",
//                           },
//                           {
//                             title: "Advanced CSS Grid Techniques",
//                             slug: "advanced-css-grid-techniques",
//                             image: "/placeholder.svg?height=80&width=80",
//                             date: "Jan 12, 2024",
//                             category: "Frontend",
//                           },
//                         ].map((post, index) => (
//                           <Link key={index} href={`/blog/regular/${post.slug}`}>
//                             <div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                               <Image
//                                 src={post.image || "/placeholder.svg"}
//                                 alt={post.title}
//                                 width={80}
//                                 height={80}
//                                 className="w-20 h-20 object-cover rounded-lg"
//                               />
//                               <div className="flex-1 min-w-0">
//                                 <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2">{post.title}</h4>
//                                 <div className="flex items-center gap-2 text-xs text-slate-500">
//                                   <Calendar className="w-3 h-3" />
//                                   <span>{post.date}</span>
//                                 </div>
//                                 <Badge variant="outline" className="mt-1 text-xs">
//                                   {post.category}
//                                 </Badge>
//                               </div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Tag Cloud */}
//                   <Card className="shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-lg text-slate-900">Tag Cloud</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-wrap gap-2">
//                         {[
//                           "Remote Work",
//                           "Future of Work",
//                           "Technology",
//                           "Business Strategy",
//                           "Digital Transformation",
//                           "Django",
//                           "Python",
//                           "API",
//                           "REST",
//                           "Backend",
//                           "JavaScript",
//                           "React",
//                           "Next.js",
//                           "Frontend",
//                           "TypeScript",
//                           "Node.js",
//                           "Express",
//                           "MongoDB",
//                           "PostgreSQL",
//                           "Docker",
//                           "AWS",
//                           "DevOps",
//                           "Git",
//                           "Testing",
//                           "Security",
//                           "Performance",
//                           "Optimization",
//                           "Machine Learning",
//                           "AI",
//                           "Data Science",
//                           "CSS",
//                           "HTML",
//                           "Responsive Design",
//                         ].map((tag, index) => (
//                           <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
//                             <Badge
//                               variant="outline"
//                               className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors text-xs px-2 py-1"
//                             >
//                               {tag}
//                             </Badge>
//                           </Link>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Advertisement */}
//                   <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
//                     <CardContent className="p-6 text-center">
//                       <div className="bg-emerald-600 text-white rounded-lg p-6 mb-4">
//                         <h3 className="font-bold text-lg mb-2">TYPESTAR</h3>
//                         <p className="text-sm opacity-90 mb-4">
//                           Boost your development skills with our premium courses
//                         </p>
//                         <Button className="bg-white text-emerald-600 hover:bg-slate-100">Get Started</Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mobile Sidebar - Stacked Below Main Content */}
//       <div className="lg:hidden">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="space-y-6">
//               {/* Popular Posts */}
//               <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
//                     <div className="p-2 bg-orange-100 rounded-lg">
//                       <Flame className="w-5 h-5 text-orange-600" />
//                     </div>
//                     Popular Posts
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {[
//                       {
//                         title: "The Future of Remote Work: Complete Analysis",
//                         slug: "future-remote-work-trends-technologies-2024",
//                         image: "/placeholder.svg?height=80&width=80",
//                         views: "2.4k",
//                         category: "Business",
//                         gradient: "from-blue-500 to-purple-600",
//                       },
//                       {
//                         title: "Next.js 14 App Router: Complete Guide",
//                         slug: "nextjs-14-app-router-guide",
//                         image: "/placeholder.svg?height=80&width=80",
//                         views: "1.8k",
//                         category: "Frontend",
//                         gradient: "from-green-500 to-emerald-600",
//                       },
//                       {
//                         title: "Building Scalable APIs with Django",
//                         slug: "building-scalable-apis-django-rest-framework",
//                         image: "/placeholder.svg?height=80&width=80",
//                         views: "1.5k",
//                         category: "Backend",
//                         gradient: "from-pink-500 to-rose-600",
//                       },
//                     ].map((post, index) => (
//                       <Link key={index} href={`/blog/regular/${post.slug}`}>
//                         <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer">
//                           <div className="flex gap-3">
//                             <div className="relative">
//                               <Image
//                                 src={post.image || "/placeholder.svg"}
//                                 alt={post.title}
//                                 width={80}
//                                 height={80}
//                                 className="w-20 h-20 object-cover rounded-lg shadow-sm"
//                               />
//                               <div className="absolute -top-1 -right-1">
//                                 <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
//                                   #{index + 1}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
//                                 {post.title}
//                               </h4>
//                               <div className="flex items-center gap-2 mb-2">
//                                 <Badge
//                                   variant="outline"
//                                   className="text-xs border-orange-200 text-orange-700 bg-orange-50"
//                                 >
//                                   {post.category}
//                                 </Badge>
//                               </div>
//                               <div className="flex items-center gap-1 text-xs text-slate-500">
//                                 <TrendingUp className="w-3 h-3 text-orange-500" />
//                                 <span className="font-medium text-orange-600">{post.views} views</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                   <Link href="/blog?sort=popular">
//                     <Button
//                       variant="outline"
//                       className="w-full mt-4 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
//                     >
//                       <Flame className="w-4 h-4 mr-2" />
//                       View All Popular Posts
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>

//               {/* Categories */}
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-lg text-slate-900">Category</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {[
//                       { name: "Frontend", count: 12, color: "bg-purple-500" },
//                       { name: "Backend", count: 8, color: "bg-orange-500" },
//                       { name: "DevOps", count: 6, color: "bg-green-500" },
//                       { name: "Design", count: 4, color: "bg-pink-500" },
//                       { name: "Business", count: 10, color: "bg-blue-500" },
//                     ].map((category, index) => (
//                       <Link key={index} href={`/blog?category=${category.name}`}>
//                         <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                           <div className="flex items-center gap-3">
//                             <div className={`w-4 h-4 rounded ${category.color}`}></div>
//                             <span className="font-medium text-slate-900">{category.name}</span>
//                           </div>
//                           <Badge variant="secondary" className="bg-slate-100 text-slate-600">
//                             {category.count}
//                           </Badge>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Recent Posts */}
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-lg text-slate-900">Recent Posts</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {[
//                       {
//                         title: "The Future of Remote Work: Trends and Technologies",
//                         slug: "future-remote-work-trends-technologies-2024",
//                         image: "/placeholder.svg?height=80&width=80",
//                         date: "Jan 20, 2024",
//                         category: "Business",
//                       },
//                       {
//                         title: "Building Scalable APIs with Django",
//                         slug: "building-scalable-apis-django-rest-framework",
//                         image: "/placeholder.svg?height=80&width=80",
//                         date: "Jan 15, 2024",
//                         category: "Backend",
//                       },
//                       {
//                         title: "Advanced CSS Grid Techniques",
//                         slug: "advanced-css-grid-techniques",
//                         image: "/placeholder.svg?height=80&width=80",
//                         date: "Jan 12, 2024",
//                         category: "Frontend",
//                       },
//                     ].map((post, index) => (
//                       <Link key={index} href={`/blog/regular/${post.slug}`}>
//                         <div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                           <Image
//                             src={post.image || "/placeholder.svg"}
//                             alt={post.title}
//                             width={80}
//                             height={80}
//                             className="w-20 h-20 object-cover rounded-lg"
//                           />
//                           <div className="flex-1 min-w-0">
//                             <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2">{post.title}</h4>
//                             <div className="flex items-center gap-2 text-xs text-slate-500">
//                               <Calendar className="w-3 h-3" />
//                               <span>{post.date}</span>
//                             </div>
//                             <Badge variant="outline" className="mt-1 text-xs">
//                               {post.category}
//                             </Badge>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Tag Cloud */}
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-lg text-slate-900">Tag Cloud</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {[
//                       "Remote Work",
//                       "Future of Work",
//                       "Technology",
//                       "Business Strategy",
//                       "Digital Transformation",
//                       "Django",
//                       "Python",
//                       "API",
//                       "REST",
//                       "Backend",
//                       "JavaScript",
//                       "React",
//                       "Next.js",
//                       "Frontend",
//                       "TypeScript",
//                       "Node.js",
//                       "Express",
//                       "MongoDB",
//                       "PostgreSQL",
//                       "Docker",
//                       "AWS",
//                       "DevOps",
//                       "Git",
//                       "Testing",
//                       "Security",
//                       "Performance",
//                       "Optimization",
//                       "Machine Learning",
//                       "AI",
//                       "Data Science",
//                       "CSS",
//                       "HTML",
//                       "Responsive Design",
//                     ].map((tag, index) => (
//                       <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
//                         <Badge
//                           variant="outline"
//                           className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors text-xs px-2 py-1"
//                         >
//                           {tag}
//                         </Badge>
//                       </Link>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Advertisement */}
//               <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
//                 <CardContent className="p-6 text-center">
//                   <div className="bg-emerald-600 text-white rounded-lg p-6 mb-4">
//                     <h3 className="font-bold text-lg mb-2">TYPESTAR</h3>
//                     <p className="text-sm opacity-90 mb-4">Boost your development skills with our premium courses</p>
//                     <Button className="bg-white text-emerald-600 hover:bg-slate-100">Get Started</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <section className="py-8 bg-slate-50 border-t border-slate-200">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* Previous Post */}
//               {navigationPosts.previous && (
//                 <Link href={`/blog/${navigationPosts.previous.slug}`}>
//                   <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-3 mb-2">
//                         <ChevronLeft className="w-5 h-5 text-emerald-600" />
//                         <span className="text-sm font-medium text-emerald-600">Previous Post</span>
//                       </div>
//                       <h3 className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
//                         {navigationPosts.previous.title}
//                       </h3>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               )}

//               {/* Next Post */}
//               {navigationPosts.next && (
//                 <Link href={`/blog/${navigationPosts.next.slug}`}>
//                   <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
//                     <CardContent className="p-6">
//                       <div className="flex items-center justify-end gap-3 mb-2">
//                         <span className="text-sm font-medium text-emerald-600">Next Post</span>
//                         <ChevronRight className="w-5 h-5 text-emerald-600" />
//                       </div>
//                       <h3 className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors text-right">
//                         {navigationPosts.next.title}
//                       </h3>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               )}
//             </div>

//             {/* Back to Blog */}
//             <div className="text-center mt-6">
//               <Link href="/blog">
//                 <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                   ← Back to Blog Home
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Author Bio */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <Card className="border-2 border-emerald-200 bg-emerald-50">
//               <CardContent className="p-8">
//                 <div className="flex items-start gap-6">
//                   <Avatar className="w-20 h-20">
//                     <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
//                     <AvatarFallback>
//                       <User className="w-8 h-8" />
//                     </AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author.name}</h3>
//                     <p className="text-slate-700 leading-relaxed mb-4">{post.author.bio}</p>
//                     <div className="flex gap-4">
//                       <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                         Follow
//                       </Button>
//                       <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                         View Profile
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Comments Section */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8">
//               Comments ({comments.length + comments.reduce((acc, comment) => acc + comment.replies.length, 0)})
//             </h3>

//             {/* Comment Form */}
//             <Card className="mb-8">
//               <CardContent className="p-6">
//                 <form onSubmit={handleCommentSubmit}>
//                   <Textarea
//                     placeholder="Share your thoughts about this article..."
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     className="mb-4"
//                     rows={4}
//                   />
//                   <div className="flex justify-end">
//                     <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                       Post Comment
//                     </Button>
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Comments List */}
//             <div className="space-y-6">
//               {comments.map((comment) => (
//                 <div key={comment.id}>
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <Avatar className="w-10 h-10">
//                           <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
//                           <AvatarFallback>
//                             <User className="w-5 h-5" />
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-2">
//                             <span className="font-medium text-slate-900">{comment.author.name}</span>
//                             <span className="text-slate-500 text-sm">
//                               {new Date(comment.createdAt).toLocaleDateString()}
//                             </span>
//                           </div>
//                           <p className="text-slate-700 leading-relaxed mb-4">{comment.content}</p>
//                           <div className="flex items-center gap-4">
//                             <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
//                               <ThumbsUp className="w-4 h-4 mr-1" />
//                               {comment.likes}
//                             </Button>
//                             <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
//                               Reply
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Replies */}
//                   {comment.replies.length > 0 && (
//                     <div className="ml-12 mt-4 space-y-4">
//                       {comment.replies.map((reply) => (
//                         <Card key={reply.id} className="bg-slate-50">
//                           <CardContent className="p-4">
//                             <div className="flex items-start gap-3">
//                               <Avatar className="w-8 h-8">
//                                 <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
//                                 <AvatarFallback>
//                                   <User className="w-4 h-4" />
//                                 </AvatarFallback>
//                               </Avatar>
//                               <div className="flex-1">
//                                 <div className="flex items-center gap-2 mb-1">
//                                   <span className="font-medium text-slate-900 text-sm">{reply.author.name}</span>
//                                   <span className="text-slate-500 text-xs">
//                                     {new Date(reply.createdAt).toLocaleDateString()}
//                                   </span>
//                                 </div>
//                                 <p className="text-slate-700 text-sm leading-relaxed mb-2">{reply.content}</p>
//                                 <Button
//                                   variant="ghost"
//                                   size="sm"
//                                   className="text-slate-500 hover:text-emerald-600 text-xs"
//                                 >
//                                   <ThumbsUp className="w-3 h-3 mr-1" />
//                                   {reply.likes}
//                                 </Button>
//                               </div>
//                             </div>
//                           </CardContent>
//                         </Card>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Posts */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Articles</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {relatedPosts.map((relatedPost, index) => (
//                 <motion.div
//                   key={relatedPost.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <Link href={`/blog/regular/${relatedPost.slug}`}>
//                     <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
//                       <CardContent className="p-0">
//                         <div className="relative overflow-hidden rounded-t-lg">
//                           <Image
//                             src={relatedPost.coverImage || "/placeholder.svg"}
//                             alt={relatedPost.title}
//                             width={300}
//                             height={200}
//                             className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
//                           <div className="flex items-center gap-1 text-sm text-slate-500">
//                             <Clock className="w-3 h-3" />
//                             {relatedPost.readTime}
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <WhatsAppFloat />
//     </div>
//   )
// }
