# monorepo-template

A minimal pnpm (with Turbo) monorepo template.

## Requirements

- Node.js 24.12.0
- pnpm 10.27.0

## Structure

```
monorepo-template/
├── apps/                # Application packages
│   └── example/         # Example application
├── packages/            # Shared library packages
│   ├── eslint-config/   # ESLint configuration
│   ├── prettier-config/ # Prettier configuration
│   ├── tsconfig/        # TypeScript configurations
│   └── vitest-config/   # Vitest configuration
├── package.json         # Root workspace configuration
└── pnpm-workspace.yaml
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages (via Turborepo)
pnpm build

# Type check all packages
pnpm typecheck

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run pre-commit checks automatically:

- **Linting & Formatting**: Runs ESLint and Prettier on staged files via [lint-staged](https://github.com/okonet/lint-staged)
- **Test Coverage**: Ensures 100% code coverage is maintained on every commit

The pre-commit hook will automatically fix linting and formatting issues when possible. If coverage drops below 100%, the commit will be blocked.

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with the [Angular convention](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).
