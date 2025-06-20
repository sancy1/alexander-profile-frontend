"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890" // Replace with actual phone number
    const message = "Hi Alexander! I'm interested in discussing a project with you."
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
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </motion.div>
  )
}
