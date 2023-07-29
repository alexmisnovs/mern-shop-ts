"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductHandler = exports.getProductByIdHanlder = exports.getAllProductsHandler = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
//TODO, add repositories to make sure I can work with multiple DBs
//@desc     Fetch All Products
//@route    GET /api/products
//@access   Public
exports.getAllProductsHandler = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.default.find().exec();
    res.status(200).json(products);
}));
//@desc     Fetch a product
//@route    GET /api/products/:id
//@access   Public
exports.getProductByIdHanlder = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try validation for the request
    // abstract databse to services layer
    const product = yield productModel_1.default.findById(req.params.id).exec();
    if (product === undefined || product === null) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    return res.json(product);
}));
exports.createProductHandler = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get product input
    //
}));
