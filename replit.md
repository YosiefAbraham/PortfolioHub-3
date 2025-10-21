# Portfolio Application

## Overview

This is a modern, single-page portfolio application built to showcase professional experience, projects, skills, and personal information. The application features a bold minimalist design inspired by contemporary portfolio aesthetics, with a focus on large typography, generous spacing, and a clean visual hierarchy. It's built as a full-stack application with React on the frontend and Express on the backend, though currently functioning primarily as a static portfolio site.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, chosen for its fast hot module replacement and optimized production builds
- **Wouter** for lightweight client-side routing (as opposed to React Router)
- **Single Page Application (SPA)** architecture with component-based design

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- Components are copied into the project (not installed as dependencies) for full customization
- Provides accessible, unstyled components that can be themed via CSS variables
- Located in `client/src/components/ui/`

**Styling System**
- **Tailwind CSS** for utility-first styling with custom configuration
- Custom design tokens defined in `client/src/index.css` using CSS variables
- Dark mode support via class-based theme switching
- Inter font family from Google Fonts for clean, professional typography
- Design follows principles outlined in `design_guidelines.md`: bold simplicity, large typography, minimal color palette, and generous spacing

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Custom query client configuration in `client/src/lib/queryClient.ts`
- Currently minimal server interaction, but infrastructure is in place for future API integration

**Component Structure**
- Main portfolio sections as separate components: `HeroSection`, `ExperienceSection`, `ProjectsSection`, `SkillsSection`, `AboutSection`
- Reusable card components: `ExperienceCard`, `ProjectCard`
- Modal component for detailed project views: `ProjectModal`
- Shared components like `SectionHeader`, `Navigation`, `Footer`

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for type safety
- Development mode includes Vite middleware for seamless HMR
- Production mode serves pre-built static assets from `dist/public`

**API Structure**
- Routes defined in `server/routes.ts` with `/api` prefix convention
- Currently minimal API implementation - infrastructure is ready for future endpoints
- Request/response logging middleware for API calls

**Data Layer Abstraction**
- Storage interface pattern defined in `server/storage.ts`
- `IStorage` interface provides contract for CRUD operations
- Default `MemStorage` implementation uses in-memory Map (intended as placeholder)
- Designed for easy swapping to database-backed storage (Drizzle ORM + PostgreSQL)

### Database Architecture

**ORM & Schema Definition**
- **Drizzle ORM** configured for PostgreSQL
- Schema defined in `shared/schema.ts` using Drizzle's type-safe schema builder
- Currently includes minimal `users` table as example
- Uses `drizzle-zod` for runtime validation schemas
- Migration files stored in `migrations/` directory

**Database Provider**
- Configured for **Neon Database** serverless PostgreSQL (`@neondatabase/serverless`)
- Connection via `DATABASE_URL` environment variable
- Schema push command: `npm run db:push`

**Note**: The database is configured but not actively used in the current portfolio implementation. The infrastructure is in place for adding authentication, content management, or other dynamic features in the future.

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives (accordions, dialogs, dropdowns, etc.)
- **Lucide React**: Icon library providing consistent iconography
- **cmdk**: Command menu component for potential future search/navigation features
- **embla-carousel-react**: Carousel/slider functionality
- **date-fns**: Date formatting and manipulation utilities

**Development Tools**
- **Replit-specific plugins**: Runtime error overlay, cartographer (dev tools), dev banner
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **esbuild**: Fast JavaScript bundler for production server build

**Database & Data**
- **@neondatabase/serverless**: Serverless PostgreSQL client optimized for edge environments
- **Drizzle ORM**: TypeScript ORM for type-safe database queries
- **drizzle-kit**: Database migration and schema management tools
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

**Forms & Validation**
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **Zod**: TypeScript-first schema validation (via drizzle-zod integration)

**Utilities**
- **class-variance-authority**: Utility for managing component variants
- **clsx** & **tailwind-merge**: Class name manipulation utilities combined in `cn()` helper

### Build & Deployment

**Development Workflow**
- `npm run dev`: Runs Express server with Vite middleware for HMR
- TypeScript compilation is handled by Vite (no separate tsc build step in dev)
- Type checking: `npm run check` (runs tsc without emitting files)

**Production Build**
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Both builds run via `npm run build`
- Production server: `npm start` runs the bundled Express server

**Path Aliases**
- `@/*`: Maps to `client/src/*` for frontend code
- `@shared/*`: Maps to `shared/*` for code shared between frontend and backend
- `@assets/*`: Maps to `attached_assets/*` for static assets