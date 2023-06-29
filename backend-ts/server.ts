import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./products";
import { IProduct } from "./models/models";

import { router as productRoutes } from "./routes/products.routes";
import { router as userRoutes } from "./routes/users.routes";

const app = express();

app.use("/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is stable!" });
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

app.get("/api/products/:id", (req, res) => {
  const product: IProduct | undefined = products.find(p => p._id === req.params.id);
  if (product === undefined) res.send("product not found");
  res.json(product);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));

export default app;
