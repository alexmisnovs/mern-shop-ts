import { Router, Request, Response } from "express";
import Product from "../models/productModel";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await Product.find().exec();
  res.status(200).json(products);
});

export { router };
