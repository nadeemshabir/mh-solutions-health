# 🏥 MH Solutions and Services — Professional Website

A premium, high-performance web application built for **MH Solutions and Services** (Tagline: _"Serving to Support"_), showcasing medical equipment sales, installation, repair, and AMC/CMC maintenance services.

This project is built using a modern full-stack architecture powered by **TanStack Start**, **React**, **Vite**, and **Tailwind CSS**. It incorporates direct email routing via secure server functions, Supabase storage for form data, and an immersive custom design system.

---

## 📖 Table of Contents

1. [Core Features](#-core-features)
2. [Tech Stack & Architecture](#%EF%B8%8F-tech-stack--architecture)
3. [Secure Lead & Email Flow](#-secure-lead--email-flow)
4. [Custom Styling & Theme System](#-custom-styling--theme-system)
5. [Directory Layout](#-directory-layout)
6. [Key Components & Pages](#-key-components--pages)
7. [SEO & Best Practices](#-seo--best-practices)
8. [Local Development & Setup](#-local-development--setup)
9. [Deployment](#-deployment)

---

## 🌟 Core Features

- **Dynamic Homepage**: Modern hero banner showcasing high-impact copy, live client stats, and trust indicators. Includes interactive "How We Work" steps (Consult → Supply & Install → Maintain) and a styled testimonial grid.
- **Product Showcase**: Detailed list of advanced medical equipment (Anesthesia, ICU, Dialysis, Imaging, OT Equipment) configured with dynamic routing so visitors can request quotes directly for specific items.
- **Service Center**: Outlines critical support packages including Repair, AMC/CMC contracts, spare parts management, and custom installation offerings.
- **Secure B2B Request Form**: Comprehensive multi-step inputs matching equipment types to user needs, complete with validation, loading states, and toast notifications.
- **Direct Mail Responder**: Sends stylized HTML emails straight to the company inbox when requests are logged.
- **Interactive Map & Floating Contact Widgets**: Easy-access widgets linking users to email (`mhsolutionsandservices@gmail.com`) and phone.

---

## 🛠️ Tech Stack & Architecture

- **Meta Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (SSR, server-side caching, type-safe router engine)
- **Bundler & Server**: Vite & Nitro Engine (for fast edge-optimized builds)
- **UI & Frontend**: React 19, Lucide React (Icons), Radix UI (accessible primitive building blocks)
- **Styling**: Tailwind CSS v4, custom CSS variables, gradient effects, and glassmorphism.
- **Database**: Supabase (JS Client)
- **Mailing Engine**: Resend API (triggered securely in server functions)
- **Validation**: Zod (schema parser) & React Hook Form

---

## 📬 Secure Lead & Email Flow

```
[User Fills Form] → [Supabase Database] (saves entry to quote_submissions)
                         ↓
               [TanStack Server Function] (src/lib/email.ts)
                         ↓
             [Secure Resend API Request] (Using Server API Key)
                         ↓
    [Email Sent to mhsolutionsandservices@gmail.com]
```

To prevent exposing private credentials (like your Resend API Key) to the client's browser console, the email dispatching is handled inside a **Server Function** (`createServerFn`). The browser only makes an internal POST call to `/_server` to request execution.

### The Notification Email Includes:

- Customer contact info (Name, Phone, Email, Hospital/Clinic).
- Segmented project details (Equipment type, Service needed, Message).
- Local Indian Standard Time (IST) submission timestamps.
- A **"Reply" action button** that automatically constructs a mailto draft replying directly to the user.

---

## 🎨 Custom Styling & Theme System

All styles are built cleanly with a modern dark-tinted teal-to-blue scheme, matching medical aesthetics. Custom parameters reside in [styles.css](file:///d:/AI%20projects/Mh%20solutions/mh-solutions-health/src/styles.css):

- **Gradients**: Glowing blobs and gradient overlays (`gradient-hero`, `gradient-soft`) for hero headers and CTAs.
- **Micro-Animations**: Hover-scaling on cards, custom spinning animations for loading buttons, and subtle button transformations.
- **Components**: Pre-configured variables for backgrounds, borders, inputs, and primary brand buttons.

---

## 📁 Directory Layout

```
├── .lovable/                 # Lovable platform configurations
├── public/                   # Static assets
│   ├── favicon.png           # Dynamic browser icon
│   └── site-assets...        # Additional public media
├── src/
│   ├── assets/               # Local images & Logo assets
│   ├── components/
│   │   ├── site/             # Custom site layouts (Header, Footer, Forms, etc.)
│   │   │   ├── equipment.ts  # Centralized product and equipment datasets
│   │   │   ├── QuoteForm.tsx # B2B Quote Submission handler
│   │   │   └── Header.tsx    # Header with tagline "Serving to Support"
│   │   └── ui/               # Reusable UI component library (Shadcn primitives)
│   ├── lib/
│   │   ├── site.ts           # Global configuration properties (URLs, Taglines, Emails)
│   │   ├── email.ts          # Server function managing the Resend B2B email dispatch
│   │   └── utils.ts          # Classname merger utility
│   ├── routes/               # File-based routes mapped by TanStack Start
│   │   ├── __root.tsx        # HTML wrapper layout, layout shells, and global SEO
│   │   ├── index.tsx         # Modern Homepage
│   │   ├── about.tsx         # About Us & Brand History
│   │   ├── products.tsx      # Equipment Catalog
│   │   └── quote.tsx         # Multi-purpose Request Form Page
│   ├── server.ts             # SSR server entry config
│   ├── start.ts              # Client app hydration entry
│   └── styles.css            # Root stylesheet
├── wrangler.jsonc            # Cloudflare Pages / Workers runtime configurations
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite compile plugins & TanStack Router plugins
```

---

## 📄 Key Components & Pages

### 1. Global Setup (`src/lib/site.ts`)

Houses the main business settings:

```typescript
export const SITE = {
  name: "MH Solutions and Services",
  shortName: "MH Solutions & Services",
  tagline: "Serving to Support",
  email: "mhsolutionsandservices@gmail.com",
  phone: "+91 94190XXXXX", // Update when ready
  address: "Srinagar, Jammu & Kashmir", // Update when ready
};
```

### 2. Homepage (`src/routes/index.tsx`)

- High-quality hero section introducing the tagline "Serving to Support".
- Trust strip showcasing primary product vendors.
- "How We Work" visual roadmap.
- Multi-column features for ICU, OT, and Critical Care machinery.

### 3. Quote Form (`src/components/site/QuoteForm.tsx`)

- Form validating client credentials using **Zod**.
- Triggers local Supabase database updates.
- Instantly launches the server-side email sender function on success.

---

## 🔍 SEO & Best Practices

- **Dynamic Head Generation**: Customized `<title>` and `<meta>` description headers configured per route inside TanStack's `head` options.
- **Canonical URLs**: Automatically injected to prevent duplicate search indexing.
- **Semantic HTML**: Fully utilizes modern HTML5 landmarks (`<section>`, `<article>`, `<header>`, `<footer>`, `<main>`).
- **Responsive Layouts**: Fully mobile-first design scaleable to high-definition desktop resolutions.

---

## 💻 Local Development & Setup

### 1. Installation

Install the project dependencies:

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and configure your credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-key
```

### 3. Start Development Server

```bash
npm run dev
```

The application will run locally at `http://localhost:5173`.

### 4. Build & Verification

Validate files and build production-ready files:

```bash
# Run format checking
npm run format

# Run TypeScript compilation & production build
npm run build
```

---

## 🚀 Deployment

The project is configured for serverless runtime deployments using **Cloudflare Pages** (configured via [wrangler.jsonc](file:///d:/AI projects/Mh solutions/mh-solutions-health/wrangler.jsonc)).

Any changes pushed to the `main` branch on GitHub will automatically trigger Cloudflare builds, deploy the serverless Nitro routes, and propagate updates globally.
