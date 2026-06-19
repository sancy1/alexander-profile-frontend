

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Home, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   // { name: "Services", href: "/services" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// // const resourcesItems = [
// //   { name: "Resume", href: "/resume" },
// //   { name: "Codehub", href: "/codehub" },
// //   { name: "Blog", href: "/blog" },
// // ]

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isResourcesOpen, setIsResourcesOpen] = useState(false)
//   const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)

//   const pathname = usePathname() || "/"

//   // helper: exact match for "/" else startsWith
//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href)

//   // const isResourcesActive = resourcesItems.some((r) => isActive(r.href))

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50)
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
//             <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
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
//               {navItems.map((item) => {
//                 const active = isActive(item.href)
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     aria-current={active ? "page" : undefined}
//                   >
//                     <motion.span
//                       whileHover={{ y: -2 }}
//                       className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
//                         active ? "text-emerald-600" : "text-slate-700 hover:text-emerald-600"
//                       }`}
//                     >
//                       {item.name === "Home" ? (
//                         <Home className={`w-4 h-4 ${active ? "text-emerald-600" : ""}`} />
//                       ) : (
//                         item.name
//                       )}
//                     </motion.span>
//                   </Link>
//                 )
//               })}

//               {/* Resources Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setIsResourcesOpen(true)}
//                 onMouseLeave={() => setIsResourcesOpen(false)}
//               >
//                 {/* <motion.div
//                   whileHover={{ y: -2 }}
//                   className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
//                     isResourcesActive ? "text-emerald-600" : "text-slate-700 hover:text-emerald-600"
//                   }`}
//                 >
//                   Resources
//                   <ChevronDown
//                     className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
//                   />
//                 </motion.div> */}

//                 {/* Dropdown Menu */}
//                 {/* <AnimatePresence>
//                   {isResourcesOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 backdrop-blur-md"
//                     >
//                       {resourcesItems.map((item) => {
//                         const active = isActive(item.href)
//                         return (
//                           <Link
//                             key={item.name}
//                             href={item.href}
//                             aria-current={active ? "page" : undefined}
//                           >
//                             <motion.div
//                               whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)", x: 4 }}
//                               className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 cursor-pointer ${
//                                 active
//                                   ? "text-emerald-600 bg-emerald-50"
//                                   : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
//                               }`}
//                             >
//                               {item.name}
//                             </motion.div>
//                           </Link>
//                         )
//                       })}
//                     </motion.div>
//                   )}
//                 </AnimatePresence> */}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-expanded={isMobileMenuOpen}
//               aria-label="Toggle navigation"
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
//                 {navItems.map((item) => {
//                   const active = isActive(item.href)
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       aria-current={active ? "page" : undefined}
//                     >
//                       <span
//                         className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 cursor-pointer ${
//                           active
//                             ? "text-emerald-700 bg-emerald-50"
//                             : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
//                         }`}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name === "Home" ? (
//                           <div className="flex items-center gap-2">
//                             <Home className={`w-4 h-4 ${active ? "text-emerald-700" : ""}`} /> Home
//                           </div>
//                         ) : (
//                           item.name
//                         )}
//                       </span>
//                     </Link>
//                   )
//                 })}

               
               
//                 {/* Mobile Resources Section */}
//                 <div>
//                   {/* <button
//                     onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
//                     className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
//                       isResourcesActive
//                         ? "text-emerald-700 bg-emerald-50"
//                         : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
//                     }`}
//                     aria-expanded={isMobileResourcesOpen}
//                   >
//                     Resources
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? "rotate-180" : ""}`}
//                     />
//                   </button> */}

                  
//                   {/* <AnimatePresence>
//                     {isMobileResourcesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="ml-4 mt-2 space-y-2"
//                       >
//                         {resourcesItems.map((item) => {
//                           const active = isActive(item.href)
//                           return (
//                             <Link
//                               key={item.name}
//                               href={item.href}
//                               aria-current={active ? "page" : undefined}
//                             >
//                               <span
//                                 className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 cursor-pointer ${
//                                   active
//                                     ? "text-emerald-700 bg-emerald-50"
//                                     : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
//                                 }`}
//                                 onClick={() => {
//                                   setIsMobileMenuOpen(false)
//                                   setIsMobileResourcesOpen(false)
//                                 }}
//                               >
//                                 {item.name}
//                               </span>
//                             </Link>
//                           )
//                         })}
//                       </motion.div>
//                     )}
//                   </AnimatePresence> */}
//                 </div>

//                 <div className="px-4">
//                   <Link href="/contact" passHref>
//                     <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//                       Let's Talk
//                     </Button>
//                   </Link>
//                 </div>
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
// import { usePathname } from "next/navigation"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const pathname = usePathname() || "/"

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href)

//   useEffect(() => {
//     // Check if the screen is mobile on mount and window resize
//     const checkMobile = () => setIsMobile(window.innerWidth < 768)
//     checkMobile()
    
//     const handleScroll = () => setIsScrolled(window.scrollY > 50)
    
//     window.addEventListener("resize", checkMobile)
//     window.addEventListener("scroll", handleScroll)
    
//     return () => {
//       window.removeEventListener("resize", checkMobile)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{
//         // If mobile, freeze y at 0 permanently. If desktop, use the scroll animation logic.
//         y: isMobile ? 0 : (isScrolled ? 0 : 20),
//         backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
//       }}
//       transition={{ duration: 0.3 }}
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
//         isMobile ? "border-slate-200 shadow-md" : (isScrolled ? "border-slate-200 shadow-lg" : "border-transparent")
//       }`}
//     >
//       <div className="w-full px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
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
//               {navItems.map((item) => {
//                 const active = isActive(item.href)
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     aria-current={active ? "page" : undefined}
//                   >
//                     <motion.span
//                       whileHover={{ y: -2 }}
//                       className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
//                         active ? "text-emerald-600" : "text-slate-700 hover:text-emerald-600"
//                       }`}
//                     >
//                       {item.name === "Home" ? (
//                         <Home className={`w-4 h-4 ${active ? "text-emerald-600" : ""}`} />
//                       ) : (
//                         item.name
//                       )}
//                     </motion.span>
//                   </Link>
//                 )
//               })}
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-expanded={isMobileMenuOpen}
//               aria-label="Toggle navigation"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation Drawer */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md"
//           >
//             <div className="max-w-6xl mx-auto">
//               <div className="py-4 space-y-4">
//                 {navItems.map((item) => {
//                   const active = isActive(item.href)
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       aria-current={active ? "page" : undefined}
//                     >
//                       <span
//                         className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 cursor-pointer ${
//                           active
//                             ? "text-emerald-700 bg-emerald-50"
//                             : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
//                         }`}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name === "Home" ? (
//                           <div className="flex items-center gap-2">
//                             <Home className={`w-4 h-4 ${active ? "text-emerald-700" : ""}`} /> Home
//                           </div>
//                         ) : (
//                           item.name
//                         )}
//                       </span>
//                     </Link>
//                   )
//                 })}

//                 <div className="px-4">
//                   <Link href="/contact" passHref>
//                     <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//                       Let's Talk
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   )
// }







































// // components/navigation.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Menu, X, Home, LogIn, LogOut, Shield } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useAuth } from "@/hooks/useAuth"
// import { cn } from "@/lib/utils"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Resume", href: "/resume" },
//   { name: "Contact", href: "/contact" },
// ]

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const pathname = usePathname() || "/"
//   const { user, isAuthenticated, logout } = useAuth()

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href)

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768)
//     checkMobile()
    
//     const handleScroll = () => setIsScrolled(window.scrollY > 50)
    
//     window.addEventListener("resize", checkMobile)
//     window.addEventListener("scroll", handleScroll)
    
//     return () => {
//       window.removeEventListener("resize", checkMobile)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Process secure fallback initials based on active authentication payload
//   const getInitials = () => {
//     if (!user?.email) return "U"
//     const parts = user.email.split("@")[0].split(".")
//     if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
//     return parts.map(p => p[0]).join("").toUpperCase().slice(0, 2)
//   }

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{ y: isMobile ? 0 : (isScrolled ? 0 : 20) }}
//       transition={{ duration: 0.3 }}
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300",
//         isScrolled 
//           ? "bg-white/95 dark:bg-gray-950/95 border-slate-200 dark:border-gray-800 shadow-md" 
//           : "bg-white/80 dark:bg-gray-950/80 border-transparent"
//       )}
//     >
//       <div className="w-full px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Logo */}
//             <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
//               <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-pointer">
//                 <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-xl font-bold text-base shadow-sm">
//                   ASC
//                 </div>
//                 <div>
//                   <h1 className="text-base font-bold text-slate-900 dark:text-gray-50 leading-none">Alexander S. Cyril</h1>
//                   <Badge variant="secondary" className="text-[10px] px-1.5 py-0 mt-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-0">
//                     Software Engineer
//                   </Badge>
//                 </div>
//               </motion.div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-6">
//               {navItems.map((item) => {
//                 const active = isActive(item.href)
//                 return (
//                   <Link key={item.name} href={item.href} aria-current={active ? "page" : undefined}>
//                     <motion.span
//                       whileHover={{ y: -1 }}
//                       className={cn(
//                         "text-sm font-medium transition-colors duration-200 cursor-pointer",
//                         active ? "text-emerald-600 font-semibold" : "text-slate-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
//                       )}
//                     >
//                       {item.name === "Home" ? (
//                         <Home className="w-4 h-4" />
//                       ) : (
//                         item.name
//                       )}
//                     </motion.span>
//                   </Link>
//                 )
//               })}
              
//               <div className="h-4 w-px bg-slate-200 dark:bg-gray-800 mx-2" />

//               {/* Session Control Node Buttons */}
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-3">
//                   <Link href="/admin">
//                     <Button variant="ghost" size="sm" className="gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
//                       <Shield className="w-4 h-4" />
//                       <span>Admin</span>
//                     </Button>
//                   </Link>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => logout()}
//                     className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
//                   >
//                     <LogOut className="w-4 h-4" />
//                     <span>Sign Out</span>
//                   </Button>
//                   <Avatar className="w-8 h-8 ring-2 ring-emerald-500/20">
//                     <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold">
//                       {getInitials()}
//                     </AvatarFallback>
//                   </Avatar>
//                 </div>
//               ) : (
//                 <Link href="/login">
//                   <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm gap-2">
//                     <LogIn className="w-4 h-4" />
//                     <span>Sign In</span>
//                   </Button>
//                 </Link>
//               )}
//             </div>

//             {/* Mobile Menu Toggle Action */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden text-slate-700 dark:text-gray-300"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-expanded={isMobileMenuOpen}
//               aria-label="Toggle navigation"
//             >
//               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Overlay Canvas */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-slate-100 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md"
//           >
//             <div className="max-w-6xl mx-auto py-3 space-y-2 px-2">
//               {navItems.map((item) => {
//                 const active = isActive(item.href)
//                 return (
//                   <Link key={item.name} href={item.href}>
//                     <span
//                       className={cn(
//                         "block px-4 py-2 text-sm rounded-lg font-medium transition-all cursor-pointer",
//                         active
//                           ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400"
//                           : "text-slate-600 hover:text-emerald-600 dark:text-gray-300"
//                       )}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.name === "Home" ? (
//                         <div className="flex items-center gap-2"><Home className="w-4 h-4" /> Home</div>
//                       ) : (
//                         item.name
//                       )}
//                     </span>
//                   </Link>
//                 )
//               })}

//               <div className="h-px bg-slate-100 dark:bg-gray-800 my-2 mx-4" />

//               {/* Mobile Adaptive Session Handlers */}
//               {isAuthenticated ? (
//                 <div className="space-y-2 px-2 pt-1">
//                   <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700 text-white">
//                       <Shield className="w-4 h-4 mr-2" /> Admin Dashboard
//                     </Button>
//                   </Link>
//                   <Button
//                     variant="destructive"
//                     className="w-full justify-start text-white"
//                     onClick={() => {
//                       logout();
//                       setIsMobileMenuOpen(false);
//                     }}
//                   >
//                     <LogOut className="w-4 h-4 mr-2" /> Sign Out
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="px-2 pt-1">
//                   <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
//                     <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
//                       <LogIn className="w-4 h-4 mr-2" /> Sign In
//                     </Button>
//                   </Link>
//                 </div>
//               )}

//               <div className="px-2 pt-1">
//                 <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                   <Button variant="outline" className="w-full border-slate-200 dark:border-gray-800">
//                     Let's Talk
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   )
// }






































// components/navigation.tsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Home, LogOut, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname() || "/"
  const { user, isAuthenticated, logout } = useAuth()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getInitials = () => {
    if (!user?.email) return "U"
    const parts = user.email.split("@")[0].split(".")
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return parts.map(p => p[0]).join("").toUpperCase().slice(0, 2)
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isMobile ? 0 : (isScrolled ? 0 : 20) }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-950/95 border-slate-200 dark:border-gray-800 shadow-md" 
          : "bg-white/80 dark:bg-gray-950/80 border-transparent"
      )}
    >
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-xl font-bold text-base shadow-sm">
                  ASC
                </div>
                <div>
                  <h1 className="text-base font-bold text-slate-900 dark:text-gray-50 leading-none">Alexander S. Cyril</h1>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 mt-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-0">
                    Software Engineer
                  </Badge>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link key={item.name} href={item.href} aria-current={active ? "page" : undefined}>
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={cn(
                        "text-sm font-medium transition-colors duration-200 cursor-pointer",
                        active ? "text-emerald-600 font-semibold" : "text-slate-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                      )}
                    >
                      {item.name === "Home" ? (
                        <Home className="w-4 h-4" />
                      ) : (
                        item.name
                      )}
                    </motion.span>
                  </Link>
                )
              })}
              
              {/* Session Control Node Buttons - ONLY displays active authenticated user layout options */}
              {isAuthenticated && (
                <>
                  <div className="h-4 w-px bg-slate-200 dark:bg-gray-800 mx-2" />
                  <div className="flex items-center gap-3">
                    <Link href="/admin">
                      <Button variant="ghost" size="sm" className="gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                        <Shield className="w-4 h-4" />
                        <span>Admin</span>
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => logout()}
                      className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </Button>
                    <Avatar className="w-8 h-8 ring-2 ring-emerald-500/20">
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold">
                        {getInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle Action */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Overlay Canvas */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md"
          >
            <div className="max-w-6xl mx-auto py-3 space-y-2 px-2">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={cn(
                        "block px-4 py-2 text-sm rounded-lg font-medium transition-all cursor-pointer",
                        active
                          ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "text-slate-600 hover:text-emerald-600 dark:text-gray-300"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name === "Home" ? (
                        <div className="flex items-center gap-2"><Home className="w-4 h-4" /> Home</div>
                      ) : (
                        item.name
                      )}
                    </span>
                  </Link>
                )
              })}

              {/* Mobile Dynamic Session Handlers */}
              {isAuthenticated && (
                <>
                  <div className="h-px bg-slate-100 dark:bg-gray-800 my-2 mx-4" />
                  <div className="space-y-2 px-2 pt-1">
                    <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Shield className="w-4 h-4 mr-2" /> Admin Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      className="w-full justify-start text-white"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Sign Out
                    </Button>
                  </div>
                </>
              )}

              <div className="px-2 pt-1">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}