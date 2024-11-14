import { Inter } from '@next/font/google'
import "./globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Shop Page",
  description: "A shop page that shows products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
