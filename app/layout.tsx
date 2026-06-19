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

// // Your existing metadata object is correct.
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
  
//   openGraph: {
//     title: "Alexander Cyril - Software Engineer",
//     description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//     url: "https://www.alexandercyril.xyz/",
//     siteName: "Alexander Cyril",
//     images: [
//       {
//         url: "https://www.alexandercyril.xyz/images/portfolio/ASC.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Alexander Cyril's professional portfolio",
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Alexander Cyril - Software Engineer",
//     description: "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
//     creator: "@your_twitter_handle",
//     images: ["https://www.alexandercyril.xyz/images/portfolio/ASC.jpg"],
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
//         <header>

//           <nav>
//           </nav>
//         </header>

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

//           <footer>
//             <Footer />
//           </footer>
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
import "@/app/globals.css"; // Ensure this path is correct based on your project structure
import ScrollUtils from "@/components/ScrollUtils";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import Analytics from "./analytics";
import { AuthProvider } from "@/app/context/AuthContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Cyril - Software Engineer",
  description:
    "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
  
  // CRITICAL FOR MOBILE PWA INSTALLATION: Points Next.js to your manifest metadata configuration
  manifest: "/manifest.json",
  
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
        {/* Preconnect for optimization performance keys */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning={true} // 👈 FIXED HYDRATION CRASH DUE TO BROWSER EXTENSIONS
      >
        <AuthProvider> 
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

          <div className="min-h-screen w-full flex flex-col justify-between">
            <main className="w-full flex-grow px-0 md:px-4 lg:px-8 xl:px-0 lg:container lg:mx-auto lg:max-w-7xl">
              {children}
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
          <Toaster />
        </AuthProvider> 
      </body>
    </html>
  );
}