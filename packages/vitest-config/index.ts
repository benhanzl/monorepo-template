export const baseConfig = {
  include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  exclude: ["node_modules/**", "dist/**", ".turbo/**", "coverage/**"],
  environment: "node" as const,
  globals: false,
};

export default baseConfig;
