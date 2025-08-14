// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer & Data Professional",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//     generator: 'v0.dev'
// }



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <ScrollUtils />
//       <body className="bg-background text-foreground">
//         {children}

//       </body>
//     </html>
//   )
// }


// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <ScrollUtils />
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   )
// // }















// // import type React from "react"
// // import type { Metadata } from "next"
// // import { Inter } from "next/font/google"
// // import "./globals.css" // Ensure this path is correct and accessible
// // import ScrollUtils from "@/components/ScrollUtils" // Assuming this is needed and works elsewhere
// // import Footer from "../components/footer" // ⭐⭐⭐ IMPORT YOUR FOOTER COMPONENT HERE ⭐⭐⭐

// // const inter = Inter({ subsets: ["latin"] })

// // export const metadata: Metadata = {
// //   title: "Alexander Cyril - Software Engineer & Data Professional",
// //   description:
// //     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
// //   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
// //   authors: [{ name: "Alexander Cyril" }],
// //   openGraph: {
// //     title: "Alexander Cyril - Software Engineer",
// //     description:
// //       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
// //     type: "website",
// //   },
// //   generator: 'v0.dev'
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" className={inter.className}>
// //       <ScrollUtils /> {/* Consider if ScrollUtils should be here or inside body */}
// //       <body className="bg-background text-foreground min-h-screen flex flex-col antialiased overflow-x-hidden">
// //         {/*
// //           If you have a Header component that should also be full-width,
// //           it would go here, right before the <main> tag.
// //         */}
// //         <main className="flex-grow max-w-7xl mx-auto px-6 pt-4">
// //           {children} {/* This is where your page-specific content will be rendered */}
// //         </main>

// //         {/* ⭐⭐⭐ IMPORTANT CHANGE: Place Footer OUTSIDE the <main> tag ⭐⭐⭐ */}
// //         <Footer />
// //       </body>
// //     </html>
// //   )
// // }





























// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer & Data Professional",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//   generator: "v0.dev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground`}>
//         <div className="min-h-screen w-full">
//           <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }


















// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer & Data Professional",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//   generator: "v0.dev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground`}>
//         <div className="min-h-screen w-full">
//           <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }











// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer & Data Professional",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//   generator: "v0.dev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
//         <div className="min-h-screen w-full">
//           <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
















// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"
// import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//  icons: {
//     icon: "/favicon.ico", // CHANGE THIS LINE
//     shortcut: "/favicon.ico", // This one was already correct
//     apple: "/apple-touch-icon.png", // CHANGE THIS LINE (assuming apple-touch-icon.png is also in your app directory)
//   },
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//   generator: "v0.dev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
//         <div className="min-h-screen w-full">
//           <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </body>
//     </html>
//   )
// }











// // app/layout.tsx
// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"
// import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   icons: {
//     icon: "/favicon.ico", // Correct path (relative to the domain root)
//     shortcut: "/favicon.ico", // Optional (for older browsers)
//     apple: "/apple-touch-icon.png", // Correct path (assuming it's in `app/`)
//   },
//   keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
//   authors: [{ name: "Alexander Cyril" }],
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description:
//       "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
//     type: "website",
//   },
//   generator: "v0.dev",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
//         <div className="min-h-screen w-full">
//           <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </body>
//     </html>
//   )
// }













// // app/layout.tsx

// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import ScrollUtils from "@/components/ScrollUtils"
// import Footer from "../components/footer"
// import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   icons: {
//     icon: "/favicon.ico", // Main favicon for most browsers
//     shortcut: "/favicon.ico", // Optional, for older browsers
//     apple: "/apple-touch-icon.png", // For iOS devices
//     // Add specific sizes for Android/PWA
//     other: [
//       {
//         rel: "android-chrome-192x192",
//         url: "/android-chrome-192x192.png", // Or the actual path for your 192x192 icon
//       },
//       {
//         rel: "android-chrome-512x512",
//         url: "/android-chrome-512x512.png", // Your 512x512 icon
//       },
//     ],
//   },
//   // ... rest of your metadata
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <ScrollUtils />
//       <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
//         <div className="min-h-screen w-full">
//           <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </body>
//     </html>
//   )
// }











// ========================================================================================


// // profile/app/layout.tsx

// import type React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import ScrollUtils from "@/components/ScrollUtils";
// import Footer from "../components/footer";
// import { Toaster } from "@/components/ui/toaster";
// import Script from "next/script";
// import Analytics from "./analytics"; // 👈 import your tracking component

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Alexander Cyril - Software Engineer",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//     other: [
//       {
//         rel: "android-chrome-192x192",
//         url: "/android-chrome-192x192.png",
//       },
//       {
//         rel: "android-chrome-512x512",
//         url: "/android-chrome-512x512.png",
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <head>
//         {/* Optional: Preconnect for performance */}
//         <link rel="preconnect" href="https://www.googletagmanager.com" />
//         <link rel="preconnect" href="https://www.google-analytics.com" />
//       </head>
//       <body
//         className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
//       >
//         {/* Google Analytics Scripts */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-V6BNQFDEPC"
//         />
//         <Script
//           id="gtag-init"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               window.gtag = gtag;
//               gtag('js', new Date());
//               gtag('config', 'G-V6BNQFDEPC', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//         <ScrollUtils />
//         <Analytics />
//         <div className="min-h-screen w-full">
//           <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </body>
//     </html>
//   );
// }






























// // profile/app/layout.tsx

// import type React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import ScrollUtils from "@/components/ScrollUtils";
// import Footer from "../components/footer";
// import { Toaster } from "@/components/ui/toaster";
// import Script from "next/script";
// import Analytics from "./analytics"; // 👈 import your tracking component

// const inter = Inter({ subsets: ["latin"] });

// // This is the updated metadata object with Open Graph and Twitter Card properties.
// export const metadata: Metadata = {
//   // Existing metadata properties
//   title: "Alexander Cyril - Software Engineer",
//   description:
//     "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//     other: [
//       {
//         rel: "android-chrome-192x192",
//         url: "/android-chrome-192x192.png",
//       },
//       {
//         rel: "android-chrome-512x512",
//         url: "/android-chrome-512x512.png",
//       },
//     ],
//   },
  
//   // --- New Open Graph Metadata for Facebook and other platforms ---
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//     url: "https://www.alexandercyril.xyz/", // <-- Replace with your actual portfolio URL
//     siteName: "Alexander Cyril",
//     images: [
//       {
//         url: "https://www.alexandercyril.xyz/images/portfolio/ASC.jpg", // <-- Replace with the absolute URL to your social sharing image
//         width: 1200,
//         height: 630,
//         alt: "Alexander Cyril's professional portfolio",
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },

//   // --- New Twitter Card Metadata ---
//   twitter: {
//     card: "summary_large_image",
//     title: "Alexander Cyril - Software Engineer",
//     description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//     creator: "@your_twitter_handle", // <-- Replace with your Twitter handle (e.g., @alexcyrildev)
//     images: ["https://www.alexandercyril.xyz/images/portfolio/ASC.jpg"], // <-- Replace with the absolute URL to your social sharing image
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <head>
//         {/* Optional: Preconnect for performance */}
//         <link rel="preconnect" href="https://www.googletagmanager.com" />
//         <link rel="preconnect" href="https://www.google-analytics.com" />
//       </head>
//       <body
//         className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
//       >
//         {/* Google Analytics Scripts */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-V6BNQFDEPC"
//         />
//         <Script
//           id="gtag-init"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               window.gtag = gtag;
//               gtag('js', new Date());
//               gtag('config', 'G-V6BNQFDEPC', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//         <ScrollUtils />
//         <Analytics />
//         <div className="min-h-screen w-full">
//           <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

























// profile/app/layout.tsx

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollUtils from "@/components/ScrollUtils";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import Analytics from "./analytics"; // 👈 import your tracking component

const inter = Inter({ subsets: ["latin"] });

// Your existing metadata object is correct.
export const metadata: Metadata = {
  title: "Alexander Cyril - Software Engineer",
  description:
    "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  
  openGraph: {
    title: "Alexander Cyril - Software Engineer",
    description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
    url: "https://www.alexandercyril.xyz/",
    siteName: "Alexander Cyril",
    images: [
      {
        url: "https://www.alexandercyril.xyz/images/portfolio/ASC.jpg",
        width: 1200,
        height: 630,
        alt: "Alexander Cyril's professional portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexander Cyril - Software Engineer",
    description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
    creator: "@your_twitter_handle",
    images: ["https://www.alexandercyril.xyz/images/portfolio/ASC.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Optional: Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
      >
        <header>

          <nav>
          </nav>
        </header>

        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V6BNQFDEPC"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-V6BNQFDEPC', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ScrollUtils />
        <Analytics />

        <div className="min-h-screen w-full">
          <main className="w-full px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}