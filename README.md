# Solverstreet Technologies - AI & Digital Solutions Website

Enterprise-grade website prototype for an AI and digital solutions company. Built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, NextAuth.js, Prisma, PostgreSQL, React Hook Form, Zod, and Nodemailer.

## Features

- Responsive premium SaaS interface with sticky glass navigation, dark/light mode, animated hero, scroll reveals, micro-interactions, portfolio filters, testimonials, pricing, and loading skeletons.
- Service, solutions, industries, portfolio, pricing, blog, contact, legal, authentication, and protected dashboard pages.
- Credential auth with register, login, logout, forgot password, reset password, email verification token generation, and dashboard protection.
- Professional contact form with Zod validation, React Hook Form, PostgreSQL persistence, and Nodemailer confirmation/notification hooks.
- Prisma schema for users, sessions, accounts, verification tokens, password reset tokens, inquiries, and saved projects.
- Vercel-ready environment configuration.

## Project Structure

```txt
src/
  app/                 App Router pages and API routes
  components/          Layout, providers, motion, and shadcn-style UI primitives
  config/              Site navigation and marketing content
  features/            Feature-oriented UI for marketing and auth
  lib/                 Auth, Prisma, mail, validators, utilities
  types/               NextAuth module augmentation
prisma/
  schema.prisma        PostgreSQL data model
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
cp .env.example .env
```

3. Update `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL`, and SMTP values in `.env`.

4. Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Notes

- Email verification and password reset links are logged to the server console in this prototype. Configure SMTP and replace the console link flow with branded email templates before production.
- File upload currently stores the selected filename with the inquiry. Add object storage such as S3, Vercel Blob, or Cloudinary for production file handling.
- Replace placeholder legal pages and sample images/content before launch.
