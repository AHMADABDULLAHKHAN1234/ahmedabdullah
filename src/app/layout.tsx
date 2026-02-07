import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ahmad Abdullah Khan | Software Engineer",
    description: "Professional portfolio of Ahmad Abdullah Khan, a Software Engineer specializing in Full Stack and Mobile Development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
