import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from "./mailer.ts";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// ✅ Global Error Handler (prevents crashes)
const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("🚨 Error:", error.message || error);
  res.status(500).json({
    status: false,
    message: "Error sending email",
    error: error instanceof Error ? error.message : error,
  });
};

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Default route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/send", async (req, res, next) => {
  const { name, email, message } = req.body;
  try {
    await sendEmail(name, email, message);
    res.status(200).json({ status: true, message: "Email sent successfully" });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

// ✅ Prevents server from crashing on unexpected errors
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection:", reason);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
