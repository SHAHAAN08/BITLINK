import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Sans-serif font (Poppins)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
});

// Monospace font (Roboto Mono)
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "BitLinks-URL Shortener",
  description: "A simple URL shortener built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
