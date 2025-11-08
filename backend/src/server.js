import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import  connectDB  from "./lib/db.js";
const app = express();
const __dirname = path.resolve();


connectDB();

app.use(
  cors({
    origin: ["https://streamify-video-calls-frontend.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send(" Streamify backend is running on Vercel!");
});
app.get("/favicon.ico", (req, res) => res.status(204).end());

export default app; 
