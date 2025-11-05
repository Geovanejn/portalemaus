# Portal UMP Emaús - Sistema Integrado de Gestão e Votação

## Overview
Portal UMP Emaús is a comprehensive full-stack web application for the UMP Emaús church youth group. It integrates a voting/election management system with devotionals, prayer requests, an events calendar, and a board directory. The portal features a modern, mobile-first design with a gray/orange color palette, rotating hero banner, and accessible UI components.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes (November 2025)
- Implemented large rotating hero banner with images, animations, and navigation controls
- Applied gray/black and orange/yellow color palette across all portal pages
- Updated navbar with gradient background and orange accent highlights
- Standardized card styling: white backgrounds, gray borders, orange/yellow icon accents
- Enhanced transitions and hover effects for improved UX

## System Architecture

### Frontend
The frontend is built with React 18 and TypeScript, utilizing Vite, Wouter for routing, and TanStack Query for server state management. UI components are sourced from shadcn/ui on Radix UI primitives, styled with Tailwind CSS, adhering to a mobile-first Material Design approach with custom UMP Emaús branding (orange #FFA500). Authentication state is managed via React Context API, with tokens stored in local storage. Forms use React Hook Form with Zod validation.

### Backend
The backend uses Express.js on Node.js with TypeScript, providing RESTful API endpoints. Authentication is email-based with 6-digit verification codes and JWT. User roles (`isAdmin`, `isMember`) control access. The API is organized by domain. The database employs Better-SQLite3 for development and Drizzle ORM configured for PostgreSQL, enforcing election rules and a three-round scrutiny system.

### UI/UX Decisions
The system features a responsive, Portuguese-language UI with UMP Emaús branding. Real-time results include automatic polling, smart sorting, and visual hierarchies. Admin functionalities include exporting election result images, generating PDF audit reports, and a circular crop tool for member photos.

### Feature Specifications
Key features include:
- Email/password authentication with JWT and 2-hour session auto-logout.
- Role-based access control (admin/member).
- Comprehensive election management.
- Candidate registration and secure voting.
- Real-time vote results.
- Admin panel for member management.
- Automated majority-based position closing and three-round scrutiny.
- Generation of shareable election results images and detailed PDF audit reports.
- Automated birthday email system.
- Circular image crop tool.
- Full mobile optimization.
- Tracking of active/inactive members.

### Portal UMP Emaús Expansion
The portal expansion will introduce:
- **Secretariat System:** For managing different church departments.
- **Devotionals:** CRUD functionality for articles with publication control.
- **Prayer Requests:** Public submission and member-managed status updates.
- **Events Calendar:** CRUD for events with public viewing.
- **Board Directory:** Public display of board members with synchronized data.
- **Instagram Integration:** Automatic syncing and display of posts via Instagram Graph API.
- **Enhanced Home Page:** A unified feed integrating devotionals, events, and Instagram.
- **New Database Tables:** `secretarias`, `devotionals`, `prayer_requests`, `events`, `instagram_posts`, with updates to the `members` table.
- **Expanded Permissions:** Tiered access for visitors, common members, secretariat members, and administrators.
- **New API Endpoints:** For devotionals, prayer requests, events, secretariats, Instagram, and board.
- **New Frontend Pages:** For devotionals (list, view, editor), prayer requests, events (public, manager), board, member area, secretary panel, and settings.

## External Dependencies

### Email Service
- **Resend**: For transactional emails and verification codes.

### UI Component Libraries
- **@radix-ui/**: Accessible UI primitives.
- **lucide-react**: Icon library.
- **react-easy-crop**: Interactive image cropping.

### Database
- **better-sqlite3**: For local SQLite development.
- **@neondatabase/serverless**: For PostgreSQL deployment.

### Development Tools
- **Drizzle Kit**: Database migration and schema management.
- **tsx**: TypeScript execution.
- **node-cron**: Automated task scheduling.

### Validation
- **Zod**: Runtime schema validation.
- **drizzle-zod**: Zod schema generation from Drizzle tables.

### Social Media Integration
- **Instagram Graph API**: For syncing posts.