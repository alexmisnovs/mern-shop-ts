import { Router } from "express";
import { getAllProductsHandler, getProductByIdHanlder } from "../controllers/productController";

const router = Router();

router.route("/").get(getAllProductsHandler);
router.route("/:id").get(getProductByIdHanlder);

export { router };
