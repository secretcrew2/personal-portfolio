import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jurdel Gallano - SML Portfolio",
  description: "SML Developer and AI-Assisted Software Builder Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}