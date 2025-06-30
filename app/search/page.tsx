// app/search/page.tsx


// This file assumes you are using the Next.js App Router.
// If you are using the Pages Router, this file would typically be `pages/search.tsx`.

"use client"; // This directive is needed for client-side interactivity in App Router

import React from 'react';
import SearchBar from '@/components/SearchBar'; // Adjust path if your components directory is elsewhere
import Navigation from '@/components/navigation'; // Assuming you have a Navigation component
import WhatsAppFloat from '@/components/whatsapp-float'; // Assuming you have a WhatsAppFloat component
import { FullWidthSection } from '@/components/full-width-section'; // Assuming you have this utility component

// Load your Google Programmable Search Engine ID from environment variables.
// In Next.js, environment variables prefixed with NEXT_PUBLIC_ are exposed to the client-side.
// Make sure to add NEXT_PUBLIC_GOOGLE_CSE_ID to your .env.local file.
const GOOGLE_CSE_ID = process.env.NEXT_PUBLIC_GOOGLE_CSE_ID || '51809666ed9d94e34';

/**
 * SearchPage Component
 * This is the Next.js page that will host your custom Google search functionality.
 * It integrates the SearchBar component and provides overall page styling
 * consistent with your website's emerald and slate theme.
 */
export default function SearchPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navigation /> {/* Your existing navigation component */}

      {/* Hero Section for Search Page */}
      <FullWidthSection
        backgroundColor="bg-gradient-to-br from-emerald-50 to-emerald-100"
        className="relative py-20 sm:py-24 lg:py-28 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 mb-4 leading-tight drop-shadow-sm">
            Search Our <span className="text-emerald-600">Website</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Quickly find the information you need across our blog posts, services, and projects.
          </p>
        </div>
      </FullWidthSection>

      {/* Main Search Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* The SearchBar component will render the Google search input and results here */}
          <SearchBar searchEngineId={GOOGLE_CSE_ID} />
        </div>
      </section>

      <WhatsAppFloat /> {/* Your existing WhatsApp float button */}
    </div>
  );
}
