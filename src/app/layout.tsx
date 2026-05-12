import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medverz Education - Affordable MBBS Admissions Worldwide",
  description: "Get affordable MBBS admissions worldwide with expert counseling. We help students secure seats in top medical universities across Russia, Georgia, Kazakhstan, and more.",
};

import TopStrip from "@/components/TopStrip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TopStrip />
        <hr className="border-gray-100" />
        <Navbar />
        {children}
        <Footer />
        <LeadPopup />
        <FloatingActions />
      </body>
    </html>
  );
}
