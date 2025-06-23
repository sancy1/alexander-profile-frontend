// "use client"

// import { motion } from "framer-motion"
// import { MessageCircle } from "lucide-react"

// export default function WhatsAppFloat() {
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "+1234567890" // Replace with actual phone number
//     const message = "Hi Alexander! I'm interested in discussing a project with you."
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//     window.open(whatsappUrl, "_blank")
//   }

//   return (
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
//       className="fixed bottom-6 right-6 z-50"
//     >
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={handleWhatsAppClick}
//         className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//       >
//         <MessageCircle className="w-7 h-7" />
//       </motion.button>

//       {/* Pulse animation */}
//       <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
//     </motion.div>
//   )
// }

















// // components/WhatsAppFloat.tsx
// "use client" // This directive is crucial for client-side interactions like window.open

// import { motion } from "framer-motion"
// import { MessageCircle } from "lucide-react"

// export default function WhatsAppFloat() {
//   const handleWhatsAppClick = () => {
//     // Your actual phone number
//     const phoneNumber = "+2349067467561" // Note: Remove hyphens and spaces for WhatsApp URL

//     // A nice, engaging message for visitors
//     const message = "Hello Alexander! I visited your website and would love to chat about a potential project or learn more about your services. Could you please provide some information?"

//     // Construct the WhatsApp URL
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

//     // Open WhatsApp in a new tab/window
//     window.open(whatsappUrl, "_blank")
//   }

//   return (
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       // Increased delay slightly and adjusted spring for a smoother, noticeable appearance
//       transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 15 }}
//       className="fixed bottom-6 right-6 z-50" // z-50 ensures it's on top of other elements
//     >
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={handleWhatsAppClick}
//         className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
//       >
//         <MessageCircle className="w-7 h-7" />
//         {/* Pulse animation - positioned absolutely within the button, hidden overflow */}
//         <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:animate-none"></span>
//       </motion.button>
//     </motion.div>
//   )
// }













"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2349067467561" // Remove + and dashes for wa.me links
    const message = "Hello Alexander! I visited your website and would love to chat about a potential project or learn more about your services. Could you please provide some information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 z-10" />
        {/* Pulse animation */}
        <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-20"></span>
      </motion.button>
    </motion.div>
  )
}
