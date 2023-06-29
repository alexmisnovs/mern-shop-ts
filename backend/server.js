"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./products"));
const port = 5001;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("API is stable!");
});
app.get("/api/products", (req, res) => {
    res.json(products_1.default);
});
app.get("/api/products/:id", (req, res) => {
    const product = products_1.default.find(p => p._id === req.params.id);
    if (product === undefined)
        res.send("product not found");
    res.json(product);
});
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
