import { defineConfig } from "eslint/config"

import baseConfig from "../eslint.config.mjs"

export default defineConfig(...baseConfig, {
  // Add shared-specific rules or overrides here if needed
})
