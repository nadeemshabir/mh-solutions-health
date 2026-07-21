# MH Solutions and Services

A modern, high-performance web application for **MH Solutions and Services** ("Serving to Support"), built using TanStack Start, React, Vite, and Tailwind CSS. The application connects to Supabase for data persistence and uses Resend for secure B2B email notifications.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React Router + Nitro server engine)
- **Styling**: Tailwind CSS & CSS variables (modern dark-tinted design, glassmorphism, smooth micro-animations)
- **Database**: Supabase
- **Email Service**: Resend (API key-based via server functions)
- **Icons**: Lucide React
- **Validation**: Zod + React Hook Form

---

## 📬 Feature: Secure Email Notifications (Quote Submissions)

When a user submits a quote request on the website, two things happen automatically:

1. The submission details are saved to the Supabase database table `quote_submissions`.
2. A TanStack Start **Server Function** (`src/lib/email.ts`) triggers in the background. It securely calls the **Resend API** to email the submission details to the company at `mhsolutionsandservices@gmail.com` with a layout that includes a quick mailto reply button.

_Note: Since the API key resides in the server function, it is never shipped to the client's browser, keeping it safe from exposure._

---

## 📁 Directory Structure

```
├── public/                 # Static assets (Favicon, etc.)
├── src/
│   ├── components/
│   │   ├── site/           # Custom website components (Header, Footer, forms, etc.)
│   │   └── ui/             # Reusable UI component library (buttons, inputs, select, etc.)
│   ├── lib/
│   │   ├── site.ts         # Site configuration metadata (company names, links)
│   │   └── email.ts        # Secure server function to send emails via Resend
│   ├── routes/             # TanStack Start File-based routing (pages, about, quote, etc.)
│   ├── start.ts            # Client-side entry point
│   ├── server.ts           # Server-side entry point (Nitro middleware wrapper)
│   └── styles.css          # Main stylesheet
├── wrangler.jsonc          # Cloudflare deployment settings
└── vite.config.ts          # Vite build parameters
```

---

## 💻 Local Development

### 1. Requirements

Ensure you have Node.js installed.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build & Production Check

Verify compilation and builds for target edge environments (e.g., Cloudflare):

```bash
npm run build
```
