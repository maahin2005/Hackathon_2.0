import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const emailRoute = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

emailRoute.post("/send", async (req, res) => {
  const { email, name, message, phone } = req.body;
  const ownerEmails = [
    "shibupandey0203@gmail.com",
    "amitkumar655921@gmail.com",
    "mahin.malek2005@gmail.com",
  ];

  if (!email || !name || !message) {
    return res
      .status(400)
      .json({ error: "All fields are required: name, email, message" });
  }

  try {
    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Hello ${name},</h2>
          <p>We appreciate you reaching out to us! Your message has been received, and our team will review it shortly.</p>
          <p>Here’s a quick summary of your message:</p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #0056b3;">${message}</blockquote>
          <p>We’ll get back to you as soon as possible. If your inquiry is urgent, feel free to reply to this email.</p>
          <p>Best Regards,</p>
          <p style="font-weight: bold; color: #0056b3;">HireOrHired Team</p>
        </div>
      `,
    });

    // Notify the owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ownerEmails.join(","),
      subject: "New Contact Form Submission - Action Required",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #d9534f;">New Message Received from HireOrHired</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${
            phone ?? "Mobile Number not provided"
          }</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #d9534f;">${message}</blockquote>
          <p>Please review and respond promptly.</p>
        </div>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Your message has been received." });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, success: false, message: error.message });
  }
});

export default emailRoute;
