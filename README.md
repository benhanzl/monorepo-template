# monorepo-template

A minimal pnpm (with Turbo) monorepo template.

## Requirements

- Node.js 24.12.0
- pnpm 10.27.0

## Structure

```
monorepo-template/
├── apps/                # Application packages
├── packages/            # Shared library packages
│   ├── eslint-config/   # ESLint configuration
│   ├── prettier-config/ # Prettier configuration
│   └── tsconfig/        # TypeScript configurations
├── package.json         # Root workspace configuration
└── pnpm-workspace.yaml
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages (via Turborepo)
pnpm build

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with the [Angular convention](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).
