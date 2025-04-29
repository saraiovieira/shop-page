import { Inter } from "next/font/google";
import CartProvider from "@/context/CartContext";
import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Page",
  description: "A shop page that shows products",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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
};

export default RootLayout;
