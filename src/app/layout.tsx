import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaupalika",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" type="text/css" href="/css/style.css"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
