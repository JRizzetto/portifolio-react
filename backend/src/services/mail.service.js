import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMail({ name, email, message }) {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["jeffersonrizzetto@gmail.com"],
    subject: "New Contact Message",
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
}
