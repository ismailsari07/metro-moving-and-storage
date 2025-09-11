import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Website Quote Form <info@metromovingstorage.ca>",
      to: "info@metromovingstorage.ca",
      subject: "New Quote Request",
      replyTo: body.email,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Full Name:</b> ${body.fullname}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phoneNumber}</p>
        <p><b>Moving From:</b> ${body.movingFrom}</p>
        <p><b>Moving To:</b> ${body.movingTo}</p>
        <p><b>Date:</b> ${body.date}</p>
        <p><b>Size Of Move:</b> ${body.sizeOfMove}</p>
      `,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
