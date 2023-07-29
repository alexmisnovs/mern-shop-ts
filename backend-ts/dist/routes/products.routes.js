"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
exports.router = router;
router.route("/").get(productController_1.getAllProductsHandler);
router.route("/:id").get(productController_1.getProductByIdHanlder);
