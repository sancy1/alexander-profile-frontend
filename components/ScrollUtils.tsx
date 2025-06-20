
// // components/ScrollUtils.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ArrowUp } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function ScrollUtils() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
    
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true)
//       } else {
//         setIsVisible(false)
//       }
//     }

//     const calculateScrollProgress = () => {
//       const scrollTop = window.scrollY
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight
//       const progress = (scrollTop / docHeight) * 100
//       setScrollProgress(Math.min(progress, 100))
//     }

//     window.addEventListener("scroll", toggleVisibility)
//     window.addEventListener("scroll", calculateScrollProgress)

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility)
//       window.removeEventListener("scroll", calculateScrollProgress)
//     }
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   }

//   if (!isMounted) return null

//   return (
//     <div className="fixed inset-0 pointer-events-none z-50">
//       {/* Scroll Progress Indicator */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-slate-200">
//         <motion.div 
//           className="h-full bg-emerald-600" 
//           style={{ width: `${scrollProgress}%` }}
//           transition={{ duration: 0.1 }}
//         />
//       </div>

//       {/* Back to Top Button - Positioned higher */}
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-24 right-6 z-40 pointer-events-auto"
//           >
//             <Button
//               onClick={scrollToTop}
//               className="rounded-full w-12 h-12 p-0 bg-emerald-600 hover:bg-emerald-700 shadow-lg"
//               aria-label="Back to top"
//             >
//               <ArrowUp className="w-5 h-5" />
//             </Button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
























// components/ScrollUtils.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollUtils() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", toggleVisibility)
    window.addEventListener("scroll", calculateScrollProgress)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("scroll", calculateScrollProgress)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Scroll Progress Indicator - Higher z-index than menu */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-[9999]">
        <motion.div 
          className="h-full bg-emerald-600" 
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back to Top Button - Positioned higher */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-[9998] pointer-events-auto"
          >
            <Button
              onClick={scrollToTop}
              className="rounded-full w-12 h-12 p-0 bg-emerald-600 hover:bg-emerald-700 shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}