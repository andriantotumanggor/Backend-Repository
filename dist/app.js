"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables dari file .env
dotenv_1.default.config();
// Inisialisasi Express
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Server is running 🚀" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map