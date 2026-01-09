import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/node_modules/**", "**/coverage/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // TypeScript-specific configuration
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  prettierConfig, // Must be last to disable conflicting rules
];
