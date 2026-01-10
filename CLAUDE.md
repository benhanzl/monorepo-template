## Dev environment tips

- Always use pnpm.
- Always install the latest version of a package and save the exact version.
- Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`.
- Run `pnpm install --filter <project_name>` to add dependencies to a specific workspace package.
- Packages follow `@repo/<package_name>` naming convention.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.
- Shared configs are in `packages/`: `@repo/eslint-config`, `@repo/prettier-config`, `@repo/tsconfig`, `@repo/vitest-config`.
- TypeScript configs: extend `@repo/tsconfig/app.json` for apps, `@repo/tsconfig/library.json` for libraries.

## Testing instructions

- Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package.
- From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.
- To focus on one step, add the Vitest pattern: `pnpm vitest run -t "<test name>"`.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.
- Coverage is enforced at 100%—run `pnpm test:coverage` to verify.

## PR instructions

- Title format: `type(scope): description` following Conventional Commits.
- Always run `pnpm lint` and `pnpm test` before committing.
- Commitlint enforces conventional commit format via git hooks.
- Pre-commit hooks run lint-staged (Husky) to catch issues early.
- Always follow the `.github/PULL_REQUEST_TEMPLATE.md` file when creating a PR.
