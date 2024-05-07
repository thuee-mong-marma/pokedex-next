import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/ModalProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <ModalProvider />
      <body
        className={cn(
          "min-h-screen flex flex-col bg-green-500",
          poppins.className
        )}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
