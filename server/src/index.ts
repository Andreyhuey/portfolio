import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { initializeDatabase } from "./data-source";
import blogRoutes from "./routes/blog";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/blog", blogRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something broke!" });
});

const PORT = process.env.PORT || 3000;

initializeDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
