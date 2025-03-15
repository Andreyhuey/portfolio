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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mailer_1 = require("./mailer");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static("public"));
// ✅ Global Error Handler (prevents crashes)
const errorHandler = (error, req, res, next) => {
    console.error("🚨 Error:", error.message || error);
    res.status(500).json({
        status: false,
        message: "Error sending email",
        error: error instanceof Error ? error.message : error,
    });
};
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
// Default route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "./public/index.html"));
});
app.post("/send", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    try {
        yield (0, mailer_1.sendEmail)(name, email, message);
        res.status(200).json({ status: true, message: "Email sent successfully" });
    }
    catch (error) {
        next(error);
    }
}));
app.use(errorHandler);
// ✅ Prevents server from crashing on unexpected errors
process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("❌ Unhandled Rejection:", reason);
});
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
//# sourceMappingURL=server.js.map