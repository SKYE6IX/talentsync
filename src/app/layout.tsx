import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globalStyles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "---font-inter",
});

export const metadata: Metadata = {
  title: "TalentSync Assesment",
  description: "A landing test page for talentsync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
