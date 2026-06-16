import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
    title: "Valtierrè - Luxury Fashion e-commerce",
    description: "Vetierrè it's an Italian fashioned e-commerce powered by LLM, RAG and Embeddings integrations to provide the best user experience in their shopping.",
};

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap"
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="flex flex-col min-h-screen">
                {children}
            </body>
        </html>
    );
}
