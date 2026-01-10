import baseConfig from "@repo/vitest-config";
import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    ...baseConfig,
    // Add custom config here if needed
    // environment: "jsdom",
  },
});
