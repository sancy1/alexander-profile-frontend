// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   // { name: "Blog", href: "/blog" },
//   { name: "Playground", href: "/playground" },
//   { name: "Contact", href: "/contact" },
// ]

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{
//         y: isScrolled ? 0 : 20,
//         backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
//       }}
//       transition={{ duration: 0.3 }}
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
//         isScrolled ? "border-slate-200 shadow-lg" : "border-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/">
//             <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
//               <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
//                 ASC
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-slate-900">Alexander S. Cyril</h1>
//                 <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
//                   Software Engineer
//                 </Badge>
//               </div>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <Link key={item.name} href={item.href}>
//                 <motion.span
//                   whileHover={{ y: -2 }}
//                   className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
//                 >
//                   {item.name}
//                 </motion.span>
//               </Link>
//             ))}
//             {/* <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button> */}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
//           >
//             <div className="py-4 space-y-4">
//               {navItems.map((item) => (
//                 <Link key={item.name} href={item.href}>
//                   <span
//                     className="block px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               ))}
//               <div className="px-4">
//                 <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   )
// }
























// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Menu, X, Home } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   // { name: "Blog", href: "/blog" },
//   { name: "Codehub", href: "/codehub" },
//   { name: "Contact", href: "/contact" },
// ]

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{
//         y: isScrolled ? 0 : 20,
//         backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
//       }}
//       transition={{ duration: 0.3 }}
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
//         isScrolled ? "border-slate-200 shadow-lg" : "border-transparent"
//       }`}
//     >
//       <div className="w-full px-4">
//         {/* Constrained Navigation Content */}
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/">
//               <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
//                 <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
//                   ASC
//                 </div>
//                 <div>
//                   <h1 className="text-xl font-bold text-slate-900">Alexander S. Cyril</h1>
//                   <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
//                     Software Engineer
//                   </Badge>
//                 </div>
//               </motion.div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {navItems.map((item, index) => (
//                 <Link key={item.name} href={item.href}>
//                   <motion.span
//                     whileHover={{ y: -2 }}
//                     // className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
//                     className="text-sm text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
//                   >
//                     {/* {item.name} */}
//                     {item.name === "Home" ? <Home className="w-4 h-4" /> : item.name}

//                   </motion.span>
//                 </Link>
//               ))}
//               {/* <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button> */}
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation - Also Constrained */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
//           >
//             <div className="max-w-6xl mx-auto">
//               <div className="py-4 space-y-4">
//                 {navItems.map((item) => (
//                   <Link key={item.name} href={item.href}>
//                     <span
//                       // className="block px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
//                       className="block px-4 py-2 text-sm text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {/* {item.name} */}

//                       {item.name === "Home" ? (
//                         <div className="flex items-center gap-2">
//                           <Home className="w-4 h-4" /> Home
//                         </div>
//                       ) : (
//                         item.name
//                       )}

//                     </span>
//                   </Link>
//                 ))}
//                 <div className="px-4">
//                   <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   )
// }
























"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const resourcesItems = [
  { name: "Resume", href: "/resume" },
  { name: "Codehub", href: "/codehub" },
  { name: "Blog", href: "/blog" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isScrolled ? 0 : 20,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-slate-200 shadow-lg" : "border-transparent"
      }`}
    >
      <div className="w-full px-4">
        {/* Constrained Navigation Content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold text-lg">
                  ASC
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Alexander S. Cyril</h1>
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                    Software Engineer
                  </Badge>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="text-sm text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name === "Home" ? <Home className="w-4 h-4" /> : item.name}
                  </motion.span>
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1 text-sm text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                  />
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 backdrop-blur-md"
                    >
                      {resourcesItems.map((item, index) => (
                        <Link key={item.name} href={item.href}>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)", x: 4 }}
                            className="px-4 py-2 text-sm text-slate-700 hover:text-emerald-600 transition-colors duration-200 cursor-pointer"
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Also Constrained */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
          >
            <div className="max-w-6xl mx-auto">
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className="block px-4 py-2 text-sm text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name === "Home" ? (
                        <div className="flex items-center gap-2">
                          <Home className="w-4 h-4" /> Home
                        </div>
                      ) : (
                        item.name
                      )}
                    </span>
                  </Link>
                ))}

                {/* Mobile Resources Section */}
                <div>
                  <button
                    onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                  >
                    Resources
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {resourcesItems.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <span
                              className="block px-4 py-2 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 cursor-pointer"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsMobileResourcesOpen(false)
                              }}
                            >
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="px-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Let's Talk</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
