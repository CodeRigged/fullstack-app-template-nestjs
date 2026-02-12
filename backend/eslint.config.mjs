import { defineConfig } from "eslint/config"

import baseConfig from "../eslint.config.mjs"

export default defineConfig(...baseConfig, {
  // Add backend-specific rules or overrides here if needed
})
