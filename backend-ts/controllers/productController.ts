import { Request, Response } from "express";
import Product from "../models/productModel";
import asyncHandler from "../middleware/asyncHandler";

//TODO, add repositories to make sure I can work with multiple DBs

//@desc     Fetch All Products
//@route    GET /api/products
//@access   Public
export const getAllProductsHandler = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find().exec();
  res.status(200).json(products);
});

//@desc     Fetch a product
//@route    GET /api/products/:id
//@access   Public
export const getProductByIdHanlder = asyncHandler(async (req: Request, res: Response) => {
  // try validation for the request
  // abstract databse to services layer
  const product = await Product.findById(req.params.id).exec();
  if (product === undefined || product === null) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.json(product);
});

export const createProductHandler = asyncHandler(async (req: Request, res: Response) => {
  // get product input
  //
});
