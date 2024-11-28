import ProductCard from "@/components/productCard/productCard";
import styles from "./home.module.css";
import React from 'react';

interface Product {
  id: string;
  name: string;
  market_prices: {
    full_price: number;
  };
  productPackaging: {
    url: string;
  };
}

type ProductsResponse = Product[];

const { API_URL } = process.env;

const getData = async (): Promise<ProductsResponse> => {
  const res = await fetch(`${API_URL}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default function Home(): React.ReactNode {
  const [products, setProducts] = React.useState<ProductsResponse>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getData();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
}