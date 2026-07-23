import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "PT Dayana Energi Nusantara — Industrial Construction & Energy Infrastructure",
    description: "PT Dayana Energi Nusantara is a leading Indonesian civil construction and mechanical engineering company delivering high-precision solutions for the energy sector.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
