import express from "express";
import { sendEmail } from "../services/emailService.js";

const app = express();

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;
  const result = await sendEmail(to, subject, text);
  res.json(result);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
