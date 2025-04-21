# GSampaiodev WEbpage

A personal portfolio website under development, built with a modern stack, focused on performance, developer experience,
and applying best practices.

## Technologies and Tools Used

This project is being developed using the following core technologies and tools:

- **Next.js 15+** (App Router): A React framework with hybrid rendering, file-based routing, and built-in optimizations.
- **React 19+**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for more robust and readable code.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling and building responsive layouts.
- **ESLint** (v9+, Flat Config): A linter configured for Next.js, React, TypeScript, and Prettier, guaranteeing code
  quality and consistency.
- **Prettier**: An opinionated code formatter to maintain consistent code style.
- **Jest**: A JavaScript testing framework.
- **React Testing Library**: A library for testing React components efficiently, focusing on user experience.
- **Husky**: Facilitates managing Git hooks.
- **lint-staged**: Runs linters and formatters only on files added to the Git stage.

## Project Structure

The directory structure reflects the Next.js App Router convention and the organization of configured tools:

```
.
├── .husky/ # Configured Git hooks (pre-commit)
├── .next/ # Build output and cache (ignored)
├── node_modules/ # Dependencies (ignored)
├── src/ # Source code
│ ├── app/ # App Router routes and Layouts
│ │ ├── layout.tsx # Root layout
│ │ └── page.tsx # Homepage
│ ├── styles/ # Global styles
│ └── ... # Components, utils, etc. (to be added)
├── public/ # Static assets
├── .gitignore # Ignored files rules (will be optimized)
├── eslint.config.mjs # ESLint configuration (Flat Config)
├── jest.config.js # Jest configuration
├── jest.setup.js # Test environment setup (React Testing Library matchers)
├── package.json # Project manifest: dependencies, scripts, lint-staged config
├── .prettierrc.json # Prettier configuration
├── README.md # This file
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json # TypeScript configuration
└── ...
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (recommended version for Next.js)
- Git

### Installation

1. Clone the repository to your local machine:
   ```
   git clone [Your Repository URL]
   ```
2. Navigate into the project directory:
   ```
   cd [Your Project Name]
   ```
3. Install the project dependencies:
   ```
   npm install
   # or yarn
   # or pnpm install
   ```
   _(Husky's `prepare` script will run automatically after installation to set up Git hooks)._

### Running Locally

To start the development server:

```
npm run dev

# or yarn dev

# or pnpm dev

```

The application will be available at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Creates a production-optimized build.
- `npm run start`: Starts the production server (run `build` first).
- `npm run lint`: Runs ESLint across the project.
- `npm test`: Executes the test suite using Jest.

## Code Quality and Automation

- **ESLint & Prettier**: Integrated for automated linting and formatting, helping maintain clean and standardized code.
- **Pre-commit Hook**: Configured using Husky and lint-staged. Before each commit, `lint-staged`
  runs `eslint --fix`, `prettier --write`, and `jest --passWithNoTests --findRelatedTests` only on staged files. This
  ensures only correctly formatted code, without auto-fixable lint errors, and with passing related tests, is committed.

## Testing

The project is set up with Jest and React Testing Library for unit and component testing. Tests can be run
via `npm test` or automatically on pre-commit for related files.

## Planned Next Steps

- Develop the content pages (About, Projects, Now, Resume, Contact).
- Implement the navigation component (Header).
- Implement multilingual support (English/Portuguese).
- Explore and potentially integrate a UI/Component library (like shadcn or Hero UI).
- Refine the design and ensure 100% responsiveness (already guided by Tailwind).

---

Project started in [April, 2025] by Gabriel Sampaio.
