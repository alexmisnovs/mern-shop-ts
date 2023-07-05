"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const db_1 = __importDefault(require("./config/db"));
(0, db_1.default)();
const PORT = validateEnv_1.default.PORT || 8000;
if (process.env.NODE_ENV !== "test") {
    app_1.default.listen(PORT, () => console.log(`running on port ${PORT}`));
}
