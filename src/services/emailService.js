import sgMail from "@sendgrid/mail";
import { sendGridApiKey } from "./sendgrid";
sgMail.setApiKey(sendGridApiKey);

export async function sendEmail(to, subject, text) {
  const msg = {
    to,
    from: "dev.ajithkumar.b@gmail.com",
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error.toString());
    return { success: false, error: error.toString() };
  }
}
