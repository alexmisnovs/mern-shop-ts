import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { router as productRoutes } from "./routes/products.routes";
import { router as userRoutes } from "./routes/users.routes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

const app = express();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is stable!" });
});

app.use(notFound);
app.use(errorHandler);

export default app;
