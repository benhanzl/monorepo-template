import { defineProject } from "vitest/config";
import type { UserProjectConfigExport } from "vitest/config";

const config: UserProjectConfigExport = defineProject({
  test: {
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules/**", "dist/**", ".turbo/**", "coverage/**"],
    environment: "node",
    globals: false,
  },
});

export default config;
