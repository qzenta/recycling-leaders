import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = "info@recyclingleaders.co.za";
const FROM_EMAIL = "info@recyclingleaders.co.za";
const FROM_NAME = "ARL Website";

export async function POST(req: NextRequest) {
  if (!BREVO_API_KEY) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const body = await req.json();
  const { subject, fields } = body as { subject: string; fields: Record<string, string> };

  const htmlContent = Object.entries(fields)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;width:180px">${k}</td><td style="padding:6px 12px">${v}</td></tr>`)
    .join("");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: TO_EMAIL, name: "All Recycling Leaders" }],
      subject,
      htmlContent: `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${htmlContent}</table>`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
