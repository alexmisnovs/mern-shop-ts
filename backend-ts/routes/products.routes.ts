import { Router, Request, Response } from "express";
import products from "../products";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send(products);
});

export { router };
