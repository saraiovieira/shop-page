import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
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
          <div className="container">
            <Navbar  />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
