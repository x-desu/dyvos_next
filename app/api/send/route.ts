import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import SupportEmail from "@/app/components/SupportEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Dyvos <info@dyvostech.com>",
      to: ["info@dyvostech.com"],
      replyTo: email,
      subject: subject,
      react: SupportEmail({ name, email, message, subject }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
