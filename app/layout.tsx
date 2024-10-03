import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Josefin_Sans } from "next/font/google";
const jose = Josefin_Sans({subsets:["latin"]})
export const metadata: Metadata = {
  title: "Goli Bhargava",
  description: "Portfolio of Goli Bhargava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
       <FloatingNavDemo/>
      <body className={jose.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}</ThemeProvider></body>
    </html>
  );
}
