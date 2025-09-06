import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Statill - La aplicación definitiva para digitalizar y organizar tu comercio",
  description: "tp-landing-statill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
