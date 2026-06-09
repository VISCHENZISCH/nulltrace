import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "NullTrace - OSINT Intelligence Platform",
  description: "NullTrace est une plateforme OSINT open source pour investiguer une adresse IP, un email ou un numéro de téléphone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
