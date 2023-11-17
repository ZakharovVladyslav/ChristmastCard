import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { email, message } = await req.json();

        const messageBase64 = Buffer.from(message).toString("base64");

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const main = async () => {
            const info = await transporter.sendMail({
                from: '"vladislavozakharov@gmail.com"',
                to: email,
                subject: "Merry Christmas!",
                text: "Follow the link to receive your Christmas card!",
                html: `<a href="https://christmast-card.vercel.app//card?message=${messageBase64}">Click here to receive a card!</a>`,
            });

            console.log("Message sent: %s", info.messageId);
        };

        await main();

        return NextResponse.json({ result: "Email sent!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email." });
    }
}
