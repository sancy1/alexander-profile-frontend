# Alexander Cyril Profile Frontend

![Next.js](https://img.shields.io/badge/Next.js-15.x-black)
![React](https://img.shields.io/badge/React-19.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A modern, enterprise-grade frontend application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

This platform powers the public-facing experience of the Alexander Cyril ecosystem, providing portfolio showcases, resume presentation, blog content, contact workflows, newsletter subscriptions, CodeHub integration, and a secure administrative dashboard.

---

# 🌐 Live Website

https://www.alexandercyril.xyz

---

# 🔗 Project Ecosystem

This repository is part of a full-stack architecture.

| Service | Repository |
|----------|------------|
| Frontend | Current Repository |
| Backend API | https://github.com/sancy1/alexander-profile |

The frontend consumes APIs exposed by the companion Django REST Framework backend.

---

# 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Application Modules](#-application-modules)
- [Authentication Strategy](#-authentication-strategy)
- [Backend Integration](#-backend-integration)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Performance Optimizations](#-performance-optimizations)
- [Testing](#-testing)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [Related Projects](#-related-projects)
- [License](#-license)

---

# 🚀 Overview

The Alexander Cyril Profile Frontend serves as the presentation and interaction layer of the platform.

It provides:

- Portfolio Showcase
- Resume Platform
- Blog System
- Contact Management
- Newsletter Subscriptions
- CodeHub Platform
- Authentication Experience
- Administrative Dashboard
- Analytics Integration

Built using modern React patterns and Next.js App Router architecture, the application is optimized for:

- Performance
- Scalability
- SEO
- Accessibility
- Maintainability
- Developer Experience

---

# ✨ Features

## 🎨 Public Experience

### Landing Page

- Hero Slider
- Dynamic Widgets
- Animated Sections
- Responsive Layouts
- Interactive Components

### Portfolio Showcase

- Project Catalog
- Dedicated Project Pages
- Downloadable Resources
- Technology Highlights

### Resume Platform

- Resume Viewer
- Resume Downloads
- Activity Tracking

### Blog Platform

- Article Listings
- Dynamic Blog Pages
- SEO-Friendly Routing

### Search Experience

- Global Search
- Google Custom Search Integration

---

## 🔐 Authentication

- JWT Authentication
- Login & Logout
- Session Persistence
- Protected Routes
- Automatic Token Refresh
- Role-Based Access Control

---

## 👑 Administrative Dashboard

### Contacts Management

- View Contacts
- Search & Filter
- Read/Unread Tracking
- Delete Operations
- Contact Analytics

### Newsletter Management

- Active Subscribers
- Deleted Subscribers
- Reactivation Workflows
- Subscription Analytics

### User Management

- Profile Management
- Password Changes
- Authentication Monitoring

---

## 💻 CodeHub Platform

Developer-focused code sharing experience.

Features include:

- Snippet Browsing
- Categories
- Comments
- Reactions
- Sharing
- Execution Tracking
- Search & Discovery

---

## 📈 Analytics & Utilities

- Google Analytics Integration
- Visitor Tracking
- Event Monitoring
- WhatsApp Floating Contact
- Dynamic Weather & Location Widgets

---

# 🛠 Technology Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| Next.js 15+ | React Framework |
| React 19 | UI Development |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Axios | API Communication |
| React Hook Form | Form Handling |
| Zod | Validation |
| Shadcn UI | Component Library |
| Radix UI | Accessible Components |
| Lucide React | Icons |

---

## Development Tooling

| Tool | Purpose |
|--------|----------|
| pnpm | Package Manager |
| ESLint | Code Quality |
| PostCSS | CSS Processing |
| TypeScript | Static Analysis |

---

# 🏗 Architecture

The frontend follows a modular architecture.

```text
Users
  │
  ▼

Next.js Frontend
  │
  ├── Portfolio
  ├── Resume
  ├── Blog
  ├── CodeHub
  ├── Contact System
  └── Admin Dashboard

          │

          ▼

API Service Layer
(app/services/api.ts)

          │

          ▼

Django REST Backend

https://github.com/sancy1/alexander-profile
```

---

# 📁 Project Structure

```text
alexander-profile-frontend/
│
├── app/
│   ├── admin/
│   ├── blog/
│   ├── codehub/
│   ├── contact/
│   ├── portfolio/
│   ├── resume/
│   ├── search/
│   ├── login/
│   ├── context/
│   ├── providers/
│   └── services/
│
├── components/
│   ├── admin/
│   ├── ui/
│   └── shared/
│
├── hooks/
│
├── lib/
│
├── styles/
│
├── types/
│
├── public/
│
├── middleware.ts
├── next.config.mjs
├── tailwind.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 📦 Application Modules

## Portfolio

Portfolio projects include:

- CodeAnalyzer
- SchemaLence
- WebScraper
- Weather Applications
- Full Stack Platforms
- Additional Software Products

---

## Resume

Professional resume presentation with:

- Download Functionality
- Activity Tracking
- Responsive Layouts

---

## Blog

Content publishing platform featuring:

- Dynamic Routing
- SEO Metadata
- Structured Content Layouts

---

## Contact System

Integrated contact workflows connected directly to backend APIs.

Features:

- Validation
- Error Handling
- Success Notifications
- Analytics Tracking

---

## Newsletter System

Integrated subscription management.

Supports:

- Subscribe
- Unsubscribe
- Reactivation
- Administrative Monitoring

---

# 🔐 Authentication Strategy

Authentication is managed using JWT tokens.

## Auth Context

```text
app/context/AuthContext.tsx
```

Responsible for:

- Authentication State
- Login Handling
- Logout Handling
- User Session Tracking

---

## Middleware Protection

```text
middleware.ts
```

Protects:

```text
/admin/*
```

Unauthenticated users are redirected to:

```text
/login
```

---

## Custom Hooks

```text
hooks/useAuth.ts
hooks/useContacts.ts
hooks/useNewsletter.ts
```

These hooks provide optimized state management and API communication.

---

# 🔌 Backend Integration

The frontend consumes APIs exposed by the companion backend.

## Backend Repository

https://github.com/sancy1/alexander-profile

---

### Authentication

```http
POST /api/auth/login/
POST /api/auth/logout/
GET  /api/auth/profile/
PUT  /api/auth/profile/update/
```

### Contacts

```http
GET    /api/contacts/
POST   /api/contacts/create/
GET    /api/contacts/{id}/
PUT    /api/contacts/{id}/update/
DELETE /api/contacts/{id}/delete/
```

### Newsletter

```http
POST /api/newsletter/subscribe/
POST /api/newsletter/unsubscribe/
GET  /api/newsletter/subscribers/
```

### CodeHub

```http
GET  /api/codehub/snippets/
POST /api/codehub/snippets/create/
GET  /api/codehub/categories/
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <your-frontend-repository-url>

cd alexander-profile-frontend
```

---

## Install Dependencies

```bash
pnpm install
```

---

## Configure Environment Variables

Create:

```env
.env
```

Example:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Start Development Server

```bash
pnpm dev
```

Application:

```text
http://localhost:3000
```

---

# 🔧 Environment Variables

```env
# Backend API

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

# Google Analytics

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Frontend URL

NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

---

# 🚢 Deployment

## Vercel (Recommended)

```bash
pnpm build
```

Configure environment variables within the Vercel dashboard.

---

## Docker

Containerized deployments are fully supported.

---

# 📈 Performance Optimizations

Implemented optimizations include:

- Next.js Image Optimization
- Route-Based Code Splitting
- Dynamic Imports
- Lazy Loading
- SEO Metadata
- Static Generation
- Incremental Static Regeneration
- CDN Asset Caching
- Analytics Tracking

---

# 🧪 Testing

Run application tests:

```bash
pnpm test
```

Run end-to-end tests:

```bash
pnpm test:e2e
```

---

# 🗺 Roadmap

Future enhancements include:

- Advanced CodeHub Features
- Portfolio Analytics Dashboard
- Real-Time Notifications
- Multi-Language Support
- Progressive Web App (PWA)
- AI-Powered Search
- Enhanced Resume Analytics
- Content Management Improvements

---

# 👨‍💻 Author

## Alexander Cyril

Software Engineer specializing in:

- Full-Stack & Backend Engineering
- AI & Agentic Systems Development
- Distributed Systems & Event-Driven Architecture
- API Design & Platform Engineering
- Cloud Infrastructure, DevOps & Automation
- System Design & Scalable Architecture

---

# 🔗 Related Projects

## Backend API

https://github.com/sancy1/alexander-profile

Enterprise-grade Django REST Framework backend powering this application.

---

# 📄 License

This project is licensed under the MIT License.

See the LICENSE file for full details.
