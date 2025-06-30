import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";
import Providers from "./providers";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

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
      <body className={`${roboto.className} font-sans`}>
        <Providers>
          <Suspense fallback={<div className="h-[72px] w-full bg-k_green_dark" />}>
            <Header />
          </Suspense>
          <div className="">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
