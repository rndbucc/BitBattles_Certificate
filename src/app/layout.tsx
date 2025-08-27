import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import localFont from 'next/font/local';

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const kragx = localFont({
  src: '../../src/fonts/kragx.otf',
  variable: '--font-kragx',
});

export const metadata: Metadata = {
  title:
    "BUCC Certificate Corner - BRAC University Computer Club | Upgrade Yourself",
  description:
    "A simple web application to verify the authenticity of certificates issued by the BRAC University Computer Club.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/assets/bucc-favicon.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/assets/bucc-favicon-light.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${cinzel.variable} ${kragx.variable} antialiased`}>
        <Toaster closeButton richColors duration={1000} />
        {children}
      </body>
    </html>
  );
}