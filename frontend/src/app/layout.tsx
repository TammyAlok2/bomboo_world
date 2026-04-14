import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/HomePage/Navbar';
import Footer from "@/components/Footer";
import AuthProvider from "./AuthProvider";
import RouteGuard from "@/components/RouteGuard";
import {Toaster} from 'react-hot-toast';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
 icons:{
icon: "/bomboo.svg",
 },
  title: "Bomboo World - An Ecommerce Application",
  description: "Bomboo World E-commerce aims to improve greenary in biosphere",
};

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <RouteGuard>
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </RouteGuard>
        </AuthProvider>
      </body>
    </html>
  );
}