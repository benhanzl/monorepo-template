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

- Find the CI plan in the `.github/workflows` folder.
- Run `pnpm test --filter <project_name>` to run tests for a specific package.
- From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.
- To run a specific test: `pnpm vitest run -t "<test name>"` from the package directory.
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
