import { Inter } from "next/font/google";
import CartProvider from "@/context/CartContext";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Page",
  description: "A shop page that shows products",
};

export default function RootLayout({ children }) {
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