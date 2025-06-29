
// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

  <url>
    <loc>https://www.alexandercyril.xyz/</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/about</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/services</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/portfolio</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/contact</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/resume</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/codehub</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/blog</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/unsubscribe</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/portfolio/download/codeanalyzer</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.alexandercyril.xyz/portfolio/download/webscraper</loc>
    <lastmod>2025-06-28T21:31:37+00:00</lastmod>
    <priority>0.64</priority>
  </url>

</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
