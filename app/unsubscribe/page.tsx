
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Mail, UserX, CheckCircle, AlertCircle, Home } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Link from "next/link"

// export default function UnsubscribePage() {
//   const [email, setEmail] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isUnsubscribed, setIsUnsubscribed] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError("")
//     setIsSubmitting(true)

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address")
//       setIsSubmitting(false)
//       return
//     }

//     try {
//       // Simulate API call - replace with your actual unsubscribe logic
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//     //   Here you would typically make an API call to your Django backend
//     //   const response = await fetch('/api/unsubscribe/', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ email })
//     //   })

//       setIsUnsubscribed(true)
//     } catch (err) {
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Navigation />

//       {/* Hero Section with ASC Logo */}
//       <section className="relative w-full">
//         {/* Full-width background */}
//         <div
//           className="absolute inset-0 w-screen bg-gradient-to-br from-slate-50 to-emerald-50"
//           style={{
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: -1,
//           }}
//         />

//         {/* Content container */}
//         <div className="relative pt-24 pb-16">
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="max-w-none sm:max-w-4xl mx-auto text-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="mb-8 sm:mb-12"
//               >
//                 {/* ASC Logo */}
//                 <div className="flex justify-center mb-6 sm:mb-8">
//                   <div className="relative">
//                     <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
//                       <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white letter-spacing-2">
//                         ASC
//                       </span>
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
//                       <UserX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                     </div>
//                   </div>
//                 </div>

//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
//                   Newsletter <span className="text-emerald-600">Unsubscribe</span>
//                 </h1>

//                 <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
//                   We're sorry to see you go! If you no longer wish to receive our newsletter updates, please enter your
//                   email address below to unsubscribe.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Unsubscribe Form Section */}
//       <section className="py-12 sm:py-16 lg:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-2xl mx-auto">
//             {!isUnsubscribed ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300 shadow-lg">
//                   <CardContent className="p-6 sm:p-8 lg:p-10">
//                     <div className="text-center mb-8">
//                       <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
//                         <Mail className="w-8 h-8 text-emerald-600" />
//                       </div>
//                       <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
//                         Unsubscribe from Newsletter
//                       </h2>
//                       <p className="text-slate-600 leading-relaxed">
//                         Enter your email address to remove it from our mailing list. You'll stop receiving all future
//                         newsletter updates.
//                       </p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="email" className="text-sm font-medium text-slate-700">
//                           Email Address
//                         </Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email address"
//                           className="w-full h-12 text-base"
//                           required
//                         />
//                       </div>

//                       {error && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
//                         >
//                           <AlertCircle className="w-5 h-5 flex-shrink-0" />
//                           <span className="text-sm">{error}</span>
//                         </motion.div>
//                       )}

//                       <Button
//                         type="submit"
//                         disabled={isSubmitting || !email}
//                         className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 h-12 text-base font-medium"
//                       >
//                         {isSubmitting ? (
//                           <div className="flex items-center justify-center gap-2">
//                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                             Processing...
//                           </div>
//                         ) : (
//                           <div className="flex items-center justify-center gap-2">
//                             <UserX className="w-5 h-5" />
//                             Unsubscribe
//                           </div>
//                         )}
//                       </Button>
//                     </form>

//                     <div className="mt-8 pt-6 border-t border-slate-200 text-center">
//                       <p className="text-sm text-slate-500 mb-4">
//                         Changed your mind? You can always subscribe again later.
//                       </p>
//                       <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                         <Link href="/" passHref>
//                           <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                             <Home className="w-4 h-4 mr-2" />
//                             Back to Home
//                           </Button>
//                         </Link>
//                         <Link href="/contact" passHref>
//                           <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50">
//                             <Mail className="w-4 h-4 mr-2" />
//                             Contact Us
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ) : (
//               /* Success State */
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
//                   <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
//                     <div className="flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-full mx-auto mb-6">
//                       <CheckCircle className="w-10 h-10 text-white" />
//                     </div>

//                     <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Successfully Unsubscribed!</h2>

//                     <p className="text-slate-600 leading-relaxed mb-6">
//                       Your email address <strong>{email}</strong> has been removed from our newsletter list. You will no
//                       longer receive updates from us.
//                     </p>

//                     <div className="bg-white rounded-lg p-4 mb-6 border border-emerald-200">
//                       <p className="text-sm text-slate-600">
//                         <strong>What happens next?</strong>
//                         <br />• You'll stop receiving all newsletter emails immediately
//                         <br />• Your email has been permanently removed from our list
//                         <br />• You can resubscribe anytime if you change your mind
//                       </p>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                       <Link href="/" passHref>
//                         <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                           <Home className="w-4 h-4 mr-2" />
//                           Back to Home
//                         </Button>
//                       </Link>
//                       <Link href="/contact" passHref>
//                         <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                           <Mail className="w-4 h-4 mr-2" />
//                           Contact Us
//                         </Button>
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Feedback Section */}
//       {!isUnsubscribed && (
//         <section className="relative w-full">
//           {/* Full-width background */}
//           <div
//             className="absolute inset-0 w-screen bg-slate-50"
//             style={{
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: -1,
//             }}
//           />

//           {/* Content container */}
//           <div className="relative py-12 sm:py-16">
//             <div className="w-full px-4 sm:px-6 lg:px-8">
//               <div className="max-w-4xl mx-auto text-center">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Help Us Improve</h3>
//                   <p className="text-slate-600 mb-6 leading-relaxed">
//                     We'd love to know why you're unsubscribing. Your feedback helps us create better content for our
//                     community.
//                   </p>
//                   <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
//                     {[
//                       "Too many emails",
//                       "Content not relevant",
//                       "Changed email address",
//                       "No longer interested",
//                       "Other reasons",
//                     ].map((reason, index) => (
//                       <Button
//                         key={index}
//                         variant="outline"
//                         size="sm"
//                         className="border-slate-300 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm"
//                       >
//                         {reason}
//                       </Button>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       <WhatsAppFloat />
//     </div>
//   )
// }




















// app/unsubscrib.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, UserX, CheckCircle, AlertCircle, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function UnsubscribePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address to unsubscribe.",
        variant: "destructive",
      })
      return
    }

    try {
      // ⭐ MODIFIED LINE: Use NEXT_PUBLIC_BACKEND_URL ⭐
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      if (!backendUrl) {
          setError("Backend URL is not configured.");
          toast({
              title: "Configuration Error",
              description: "Backend API URL is missing. Please contact support.",
              variant: "destructive",
          });
          setIsSubmitting(false);
          return;
      }
      
      const response = await fetch(`${backendUrl}/api/newsletter/unsubscribe/`, { // Full absolute URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsUnsubscribed(true)
        toast({
          title: "Unsubscribed Successfully!",
          description: "You have been unsubscribed. A confirmation email has also been sent to your inbox.",
          variant: "default",
        })
      } else {
        const errorData = await response.json()
        const errorMessage = errorData.error || errorData.message || "An unexpected error occurred."
        setError(errorMessage)
        toast({
          title: "Unsubscription Failed",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } catch (err) {
      console.error("Unsubscribe API call failed:", err)
      setError("Something went wrong. Please try again.")
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please check your internet connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section with ASC Logo */}
      <section className="relative w-full">
        {/* Full-width background */}
        <div
          className="absolute inset-0 w-screen bg-gradient-to-br from-slate-50 to-emerald-50"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
          }}
        />

        {/* Content container */}
        <div className="relative pt-24 pb-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-none sm:max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 sm:mb-12"
              >
                {/* ASC Logo */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white letter-spacing-2">
                        ASC
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <UserX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                  Newsletter <span className="text-emerald-600">Unsubscribe</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  We're sorry to see you go! If you no longer wish to receive our newsletter updates, please enter your
                  email address below to unsubscribe.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Unsubscribe Form Section */}
      <section className="py-6 sm:py-5 lg:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!isUnsubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <div className="max-w-xl mx-auto -mt-10">
              <Card className="border-2 border-slate-200 hover:border-emerald-300 transition-colors duration-300 shadow-lg">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                      <Mail className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                      Unsubscribe from Newsletter
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      Enter your email address to remove it from our mailing list. You'll stop receiving all future
                      newsletter updates.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full h-12 text-base"
                        required
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{error}</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 h-12 text-base font-medium"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <UserX className="w-5 h-5" />
                          Unsubscribe
                        </div>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-500 mb-4">
                      Changed your mind? You can always subscribe again later.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/" passHref>
                        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                          <Home className="w-4 h-4 mr-2" />
                          Back to Home
                        </Button>
                      </Link>
                      <Link href="/contact" passHref>
                        <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-full mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Successfully Unsubscribed!</h2>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Your email address <strong>{email}</strong> has been removed from our newsletter list. You will no
                    longer receive updates from us.
                  </p>

                  <div className="bg-white rounded-lg p-4 mb-6 border border-emerald-200">
                    <p className="text-sm text-slate-600">
                      <strong>What happens next?</strong>
                      <br />• You'll stop receiving all newsletter emails immediately
                      <br />• Your email has been permanently removed from our list
                      <br />• You can resubscribe anytime if you change your mind
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/" passHref>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Home className="w-4 h-4 mr-2" />
                        Back to Home
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Feedback Section */}
      {!isUnsubscribed && (
        <section className="relative w-full">
          {/* Full-width background */}
          <div
            className="absolute inset-0 w-screen bg-slate-50"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: -1,
            }}
          />

          {/* Content container */}
          <div className="relative py-12 sm:py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Help Us Improve</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We'd love to know why you're unsubscribing. Your feedback helps us create better content for our
                    community.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {[
                      "Too many emails",
                      "Content not relevant",
                      "Changed email address",
                      "No longer interested",
                      "Other reasons",
                    ].map((reason, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="border-slate-300 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm"
                      >
                        {reason}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      <WhatsAppFloat />
    </div>
  )
}