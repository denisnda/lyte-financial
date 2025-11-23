# Lyte Advisory SME Business Lending Platform

## Overview

This is a professional financial services web application for Lyte Advisory, a business lending consultancy specializing in SME (Small and Medium Enterprise) financing solutions. The platform showcases the company's lending services, including business purchases, commercial property financing, SMSF (Self-Managed Super Fund) lending, and residential lending. It features detailed case studies, multi-stage process flows, and a contact form for client inquiries.

The application presents a sophisticated, trust-focused design inspired by premium financial services platforms (Stripe, Wise) with a navy blue and soft beige color scheme. The site guides potential clients through complex financing scenarios with clear visualizations and real-world examples.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. All routes are defined in `client/src/App.tsx` with components loaded from the pages directory.

**UI Component Library**: Built on shadcn/ui (a Radix UI-based component system) with extensive customization. Components follow the "New York" style variant with Tailwind CSS for styling. All UI components are located in `client/src/components/ui/`.

**Styling System**: Tailwind CSS with a custom design system featuring:
- CSS variables for theming (defined in `client/src/index.css`)
- Custom color palette with navy primary (`#1a2332`), soft beige/cream accents (`#e8dcc4`)
- Typography hierarchy using Playfair Display (serif) for headings and Inter/Open Sans (sans-serif) for body text
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24, 32)
- Custom interaction states (hover-elevate, active-elevate-2 classes)

**State Management**: React Query (TanStack Query v5) for server state management and data fetching. Query client configured with infinite stale time and disabled refetching.

**Form Handling**: React Hook Form with Zod validation (via @hookform/resolvers) for type-safe form validation.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript (ESM modules).

**API Structure**: RESTful API architecture with routes prefixed with `/api`. Route registration occurs in `server/routes.ts`. Currently implements a minimal API surface as the application is primarily content-focused.

**Development Server**: Vite development server integrated with Express in middleware mode for hot module replacement during development.

**Session Management**: Session infrastructure prepared with connect-pg-simple for PostgreSQL session storage (not yet fully implemented).

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL databases, with schema definitions in `shared/schema.ts`.

**Database Provider**: Configured for Neon Database (@neondatabase/serverless) with connection pooling support.

**Schema Design**: Currently implements a basic user schema with UUID primary keys, username/password authentication fields. Schema uses Drizzle-Zod for automatic Zod schema generation from database schemas.

**Migrations**: Drizzle Kit manages database migrations with output directory at `./migrations`.

**Storage Interface**: Abstracted storage layer (`server/storage.ts`) with an in-memory implementation (MemStorage) for development and a defined interface (IStorage) for production database integration.

### Build and Deployment

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js` with ESM format
- Production server serves static files from the built frontend

**Environment**: Node.js production environment with DATABASE_URL required for database connectivity.

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Complete set of unstyled, accessible UI primitives (@radix-ui/react-*) for dialogs, dropdowns, navigation, form controls, and more
- **shadcn/ui**: Component architecture built on Radix UI with Tailwind CSS styling
- **Lucide React**: Icon library for consistent iconography throughout the application
- **cmdk**: Command palette component for keyboard-driven navigation
- **Embla Carousel**: Touch-friendly carousel component for image galleries

### Database and Data Management
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM for database operations with PostgreSQL dialect
- **Drizzle Kit**: CLI tool for schema migrations and database introspection
- **Drizzle Zod**: Automatic Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Vite**: Fast development server and build tool with React plugin
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Replit Development Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Form and Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form integration
- **date-fns**: Date manipulation and formatting utilities

### Routing and State
- **Wouter**: Minimalist routing library for React
- **TanStack React Query**: Powerful data synchronization and caching for server state

### Styling Utilities
- **class-variance-authority**: Type-safe variant-based component styling
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Intelligently merges Tailwind CSS classes

### Assets
The application references several assets stored in `attached_assets/`:
- Generated images for hero sections and backgrounds
- Case study text content for SMSF, commercial property, and business purchase scenarios
- Design guidelines document outlining the visual design system
- Logo image (`image_1763865006818.png`)