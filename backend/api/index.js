// backend/api/index.js
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "../src/routes/auth.route.js";
import userRoutes from "../src/routes/user.route.js";
import chatRoutes from "../src/routes/chat.route.js";
import { connectDB } from "../src/lib/db.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: ["https://streamify-video-calls-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("✅ Streamify backend is running on Vercel!");
});

// Export for Vercel serverless
export default app;
