import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter
const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const currentYear = new Date().getFullYear(); // Get the current year

    // Load the email template for admin
    const templatePath = path.join(
      __dirname,
      "templates",
      "email-template.html"
    );
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    emailTemplate = emailTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

    // Send email to admin
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New message from Portfolio Contact Form",
      html: emailTemplate,
      priority: "high",
    });

    console.log("Admin notification sent successfully!");

    // Load the confirmation email template
    const confirmationTemplatePath = path.join(
      __dirname,
      "templates",
      "confirmation-template.html"
    );
    let confirmationTemplate = fs.readFileSync(
      confirmationTemplatePath,
      "utf8"
    );

    confirmationTemplate = confirmationTemplate
      .replace("{{name}}", name)
      .replace("{{year}}", currentYear.toString()); // Replace year dynamically

    // Send confirmation email to the sender
    await transporter.sendMail({
      replyTo: process.env.TO_EMAIL,
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your message!",
      html: confirmationTemplate,
      priority: "high",
    });

    console.log("Confirmation email sent to sender!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
