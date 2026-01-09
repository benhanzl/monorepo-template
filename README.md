# monorepo-template

A minimal pnpm monorepo template.

## Requirements

- Node.js 24.12.0
- pnpm 10.27.0

## Structure

```
monorepo-template/
├── apps/                # Application packages
├── packages/            # Shared library packages
│   ├── prettier-config/ # Prettier configuration
│   └── tsconfig/        # TypeScript configurations
├── package.json         # Root workspace configuration
└── pnpm-workspace.yaml
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Format code
pnpm format

# Check formatting
pnpm format:check
```
