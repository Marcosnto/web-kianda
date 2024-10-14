import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="vs:min-h-[50svh] md:min-h-[50vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
