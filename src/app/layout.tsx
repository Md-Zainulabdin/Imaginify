import type { Metadata } from "next";
import { Inter } from "next/font/google";
import fontlocal from "next/font/local";

import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/Auth-Provider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calSans = fontlocal({
  src: [
    {
      path: "../../public/fonts/cal.ttf",
    },
  ],
  variable: "--font-cal",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Developed by ~ Zain-ul-Abdin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${calSans.variable} ${interFont.variable} antialiased`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
