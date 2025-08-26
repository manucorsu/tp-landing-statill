import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Statill",
  description: "tp landing statill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* te juro que quería usar next/font pero el wifi no me lo permite*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
