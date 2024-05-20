import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoBrains & Co",
  description: `EcoBrains è una cooperativa che ha come scopo
  l’implementazione di un sensore che aiuti le persone ad
  essere più consapevoli del loro impatto ambientale.
  Grazie ai dati che il sensore raccoglie si riesce a capire dove
  poter migliorare.`,
  icons: '/ecobrains3.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}
