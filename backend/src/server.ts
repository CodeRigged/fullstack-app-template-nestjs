import logger from "@logger"
import dotenv from "dotenv"
import mongoose from "mongoose"

import app from "./app"

dotenv.config()

const MONGO_URI = `${process.env.MONGO_URI}`
const PORT = process.env.PORT || 5000

mongoose
  .connect(MONGO_URI)
  .then(() => {
    logger.info("Connected to MongoDB")
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => {
    logger.error("MongoDB connection error:", err)
    process.exit(1)
  })
