import express from "express";
import products from "./products";
import { IProduct } from "./models/models";

const port = 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("API is stable!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product: IProduct | undefined = products.find(p => p._id === req.params.id);
  if (product === undefined) res.send("product not found");
  res.json(product);
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
