"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users = [
    {
        name: "Admin",
        email: "admin@email.com",
        password: bcryptjs_1.default.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Alex Misnovs",
        email: "alex@email.com",
        password: bcryptjs_1.default.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Jane Doe",
        email: "jane@email.com",
        password: bcryptjs_1.default.hashSync("123456", 10),
        isAdmin: false,
    },
];
exports.default = users;
