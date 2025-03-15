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
exports.sendEmail = sendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create a transporter
const transporter = nodemailer_1.default.createTransport({
    service: process.env.SERVICE,
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
function sendEmail(name, email, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentYear = new Date().getFullYear(); // Get the current year
            // Load the email template for admin
            const templatePath = path_1.default.join(__dirname, "templates", "email-template.html");
            let emailTemplate = fs_1.default.readFileSync(templatePath, "utf8");
            emailTemplate = emailTemplate
                .replace("{{name}}", name)
                .replace("{{email}}", email)
                .replace("{{message}}", message);
            // Send email to admin
            yield transporter.sendMail({
                from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
                to: process.env.TO_EMAIL,
                subject: "New message from Portfolio Contact Form",
                html: emailTemplate,
                priority: "high",
            });
            console.log("Admin notification sent successfully!");
            // Load the confirmation email template
            const confirmationTemplatePath = path_1.default.join(__dirname, "templates", "confirmation-template.html");
            let confirmationTemplate = fs_1.default.readFileSync(confirmationTemplatePath, "utf8");
            confirmationTemplate = confirmationTemplate
                .replace("{{name}}", name)
                .replace("{{year}}", currentYear.toString()); // Replace year dynamically
            // Send confirmation email to the sender
            yield transporter.sendMail({
                replyTo: process.env.TO_EMAIL,
                from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
                to: email,
                subject: "We've received your message!",
                html: confirmationTemplate,
                priority: "high",
            });
            console.log("Confirmation email sent to sender!");
        }
        catch (error) {
            console.error("Error sending email:", error);
        }
    });
}
//# sourceMappingURL=mailer.js.map