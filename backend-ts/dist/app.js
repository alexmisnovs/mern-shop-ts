"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const products_routes_1 = require("./routes/products.routes");
const users_routes_1 = require("./routes/users.routes");
const app = (0, express_1.default)();
app.use("/api/users", users_routes_1.router);
app.use("/api/products", products_routes_1.router);
app.get("/", (req, res) => {
    res.json({ message: "API is stable!" });
});
exports.default = app;
