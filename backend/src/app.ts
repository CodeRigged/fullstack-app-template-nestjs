import express from "express"
import mongoose from "mongoose"

import todoRoutes from "~/routes/todoRoutes"

import { applyMiddleware } from "./app.middleware"

const app = express()
applyMiddleware(app)

// Health check endpoint
app.get("/health", async (_req, res) => {
  if (!mongoose.connection.readyState) {
    return res.status(503).json({ status: "db not ready" })
  }
  res.json({ status: "ok" })
})

// Todos API
app.use("/todos", todoRoutes)

export default app
