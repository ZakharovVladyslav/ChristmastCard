import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Test application",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="html">
            <body className="body">{children}</body>
        </html>
    );
}
