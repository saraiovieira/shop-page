import { Inter } from "next/font/google";
import CartProvider from "@/context/CartContext";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Page",
  description: "A shop page that shows products",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactNode {
  return (
    <CartProvider>
      <html lang="en">
        <body className={inter.className}>
          <div id="modal"></div>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
