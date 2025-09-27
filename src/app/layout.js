import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Icon, icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "legitDoc",
  description: "AI for Demystifying Legal Documents",
  icons:{
    icon:'/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
