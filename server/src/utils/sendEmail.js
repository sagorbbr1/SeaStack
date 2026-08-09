import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,

    subject: `New Portfolio Inquiry: ${subject}`,

    html: `
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          padding: 30px;
          background: #f8fafc;
        "
      >

        <div
          style="
            background: #0f172a;
            padding: 25px;
            border-radius: 16px 16px 0 0;
          "
        >
          <h2 style="color: white; margin: 0;">
            New Portfolio Inquiry
          </h2>
        </div>

        <div
          style="
            background: white;
            padding: 30px;
            border-radius: 0 0 16px 16px;
          "
        >

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Subject:</strong><br />
            ${subject}
          </p>

          <div style="margin-top: 25px;">
            <strong>Message:</strong>

            <div
              style="
                margin-top: 10px;
                padding: 18px;
                background: #f1f5f9;
                border-radius: 12px;
                line-height: 1.7;
              "
            >
              ${message}
            </div>
          </div>

          <p
            style="
              margin-top: 30px;
              color: #64748b;
              font-size: 13px;
            "
          >
            Sent from your portfolio contact form.
          </p>

        </div>
      </div>
    `,
  });
};

export default sendContactEmail;