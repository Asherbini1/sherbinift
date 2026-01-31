# Sherbini Tech Consultancy (STC) Website

## Overview

A modern, professional corporate website for Sherbini Tech Consultancy (STC), a financial technology and ERP advisory firm. The site features a clean, minimalistic design with a black, white, and grey color scheme suitable for an enterprise-grade finance consultancy. It serves as a marketing and lead generation platform with pages for services, company information, leadership profiles, and a contact form that stores inquiries in a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with custom theme variables for corporate branding
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Typography**: Space Grotesk for headings, Inter for body text

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Pattern**: REST endpoints under `/api` prefix
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Current Tables**: 
  - `contact_inquiries` - stores contact form submissions
  - `users` - placeholder for future authentication

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend with API routes
- `shared/` - Shared TypeScript types and database schema
- `migrations/` - Drizzle database migrations

### Key Design Decisions
1. **Monorepo Structure**: Client and server share types through the `shared/` directory, enabling type-safe API contracts
2. **Database Abstraction**: Storage layer (`server/storage.ts`) provides an interface pattern for database operations, making it easy to swap implementations
3. **Component Library**: shadcn/ui chosen for customizable, accessible components that can be styled to match the corporate black/white/grey theme
4. **Sharp Corners Design**: CSS custom properties set `--radius: 0rem` for a brutalist/corporate aesthetic

## External Dependencies

### Database
- PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database queries
- Drizzle Kit for schema migrations (`npm run db:push`)

### Third-Party Services
- No external APIs currently integrated
- Prepared for potential future additions (OpenAI, Stripe, email services noted in build allowlist)

### Key NPM Packages
- `@tanstack/react-query` - data fetching and caching
- `drizzle-orm` / `drizzle-zod` - database ORM with Zod schema generation
- `react-hook-form` / `@hookform/resolvers` - form state management
- `wouter` - client-side routing
- Full Radix UI primitive suite for accessible components