import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/ModalProvider";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300','400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Simple pokedex created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ModalProvider/>
      <Head>
      <link rel="shortcut icon" href="./favicon.ico"/>
      </Head>
      <body className={cn("bg-white", poppins.className)}>{children}</body>
    </html>
  );
}
