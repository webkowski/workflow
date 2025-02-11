# Workflow Project

A modern Next.js 15.1 application with Supabase, AI integration, and robust tooling.

## Requirements

- Node.js >=22.0.0
- Yarn >=1.22.0

## Quick Start

```bash
yarn install
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Tech Stack

### Core
- Next.js 15.1.4 with App Router
- React 19
- TypeScript 5
- Supabase for backend services
- DrizzleORM for database operations

### UI & Styling
- Tailwind CSS with animations
- Radix UI primitives
- Lucide React icons
- Class Variance Authority
- Next Themes for dark mode

### AI & Advanced Features
- OpenAI SDK integration
- AI helpers via 'ai' package
- Email service via Resend
- Hono for API routing

### Development Tools
- ESLint with TypeScript and Tailwind configs
- Jest and React Testing Library
- Lefthook for git hooks
- Prettier for code formatting
- Drizzle Kit for database management

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix linting issues
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn clean` - Clean build artifacts

## Project Structure

The project follows a modular structure with a focus on scalability and maintainability.

Key Directories:
- `app/`: Contains all pages and API routes using Next.js App Router
- `components/`: Reusable UI components with a focus on modularity
- `api/`: API routes and endpoints
- `db/`: Database models and operations
- `prompts/`: AI prompts and responses
- `utils/`: Utility functions and helper modules
- `types/`: TypeScript interfaces and type definitions
- `tests/`: Jest and React Testing Library test suites

## Database

The project uses Supabase with DrizzleORM for type-safe database operations. Configure your database connection using the following environment variables:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
```

## Testing

Tests are written using Jest and React Testing Library. Run the test suite:

```bash
yarn test
```

## AI Integration

The project includes OpenAI integration. Configure your AI services using:

```env
OPENAI_API_KEY=your_api_key
```

## Deployment

This application is designed to be deployed on platforms supporting Node.js >=22.0.0. For optimal performance, deploy on Vercel:

[Deploy with Vercel](https://vercel.com/new)
