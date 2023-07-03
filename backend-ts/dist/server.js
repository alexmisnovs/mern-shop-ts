"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const products_1 = __importDefault(require("./products"));
const db_1 = __importDefault(require("./config/db"));
const products_routes_1 = require("./routes/products.routes");
const users_routes_1 = require("./routes/users.routes");
(0, db_1.default)();
const app = (0, express_1.default)();
app.use("/api/users", users_routes_1.router);
app.use("/api/products", products_routes_1.router);
app.get("/", (req, res) => {
    res.json({ message: "API is stable!" });
});
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
app.get("/api/products/:id", (req, res) => {
    const product = products_1.default.find(p => p._id === req.params.id);
    if (product === undefined)
        res.send("product not found");
    res.json(product);
});
const PORT = validateEnv_1.default.PORT || 8000;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
exports.default = app;
