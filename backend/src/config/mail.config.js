import nodemailer from "nodemailer";
import { getMailConfig } from "../config/mail.config.js";

const transporter = nodemailer.createTransport(getMailConfig());

export async function sendContactMail({ name, email, message }) {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: "New Contact Message",
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
}
