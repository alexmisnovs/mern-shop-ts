import { Router, Request, Response } from "express";
import Product from "../models/productModel";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await Product.find().exec();
  res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id).exec();
  if (product === undefined) res.send("product not found");
  res.json(product);
});

export { router };
