import { createServerFn } from "@tanstack/react-start";
import { SITE } from "./site";

// Using the provided Resend API key
const RESEND_API_KEY = "re_4ZWJNnqY_2aGv53JLLnFZSbXZrg3v8QkM";
const COMPANY_EMAIL = "mhsolutionsandservices@gmail.com";
const COMPANY_NAME = "MH Solutions and Services";

export const sendQuoteEmail = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data: payload }) => {
    const { name, email, phone, organization, equipment_type, service_type, message } = payload;

    const now = new Date();
    const ist = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    }).format(now);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0d6efd, #0dcaf0); padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px; }
    .body { padding: 32px; }
    .badge { display: inline-block; background: #e8f5e9; color: #2e7d32; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .field label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin-bottom: 4px; }
    .field .value { font-size: 15px; color: #111827; font-weight: 500; }
    .divider { height: 1px; background: #e5e7eb; margin: 24px 0; }
    .message-box { background: #f9fafb; border-left: 3px solid #0d6efd; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: #374151; line-height: 1.6; }
    .footer { background: #f4f6f9; padding: 20px 32px; font-size: 12px; color: #9ca3af; text-align: center; }
    .action-btn { display: inline-block; margin-top: 20px; background: #0d6efd; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🏥 New Quote Request</h1>
      <p>${COMPANY_NAME} — Website Enquiry</p>
    </div>
    <div class="body">
      <span class="badge">✅ New Lead — Action Required</span>

      <div class="grid">
        <div class="field">
          <label>Customer Name</label>
          <div class="value">${name || "—"}</div>
        </div>
        <div class="field">
          <label>Phone</label>
          <div class="value">${phone || "—"}</div>
        </div>
        <div class="field">
          <label>Email</label>
          <div class="value">${email || "—"}</div>
        </div>
        <div class="field">
          <label>Hospital / Organization</label>
          <div class="value">${organization || "—"}</div>
        </div>
        <div class="field">
          <label>Equipment Type</label>
          <div class="value">${equipment_type || "—"}</div>
        </div>
        <div class="field">
          <label>Service Needed</label>
          <div class="value">${service_type || "—"}</div>
        </div>
      </div>

      ${
        message
          ? `<div class="divider"></div>
      <div class="field">
        <label>Additional Details</label>
        <div class="message-box">${message}</div>
      </div>`
          : ""
      }

      <div class="divider"></div>
      <div class="field">
        <label>Submitted at</label>
        <div class="value">${ist} (IST)</div>
      </div>

      <a href="mailto:${email}?subject=Re: Your Quote Request for ${equipment_type || "Medical Equipment"}&body=Dear ${name},%0A%0AThank you for reaching out to MH Solutions and Services.%0A%0A" class="action-btn">
        Reply to ${name}
      </a>
    </div>
    <div class="footer">
      This notification was sent automatically when a quote was submitted on your website.<br />
      ${COMPANY_NAME} &mdash; Serving to Support
    </div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MH Solutions Website <notifications@mhsolutionsandservices.com>",
        to: [COMPANY_EMAIL],
        subject: `New Quote Request — ${equipment_type || "Medical Equipment"} from ${name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend API Error:", err);
      throw new Error("Failed to send email");
    }

    return { success: true };
  });
