import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arihant Hospital - Quality Healthcare Services",
  description: "Arihant Hospital provides comprehensive healthcare services including emergency care, surgery, diagnostics, and specialized treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
