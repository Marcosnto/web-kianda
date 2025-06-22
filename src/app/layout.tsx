import type { Metadata } from "next";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Kianda Diversidade",
  description: "Site sobre psicologia e diversidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Providers>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
