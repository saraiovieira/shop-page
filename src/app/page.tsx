import ProductCard from "@/components/productCard/productCard";
import styles from "./home.module.css";
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

const getData = async (): Promise<ProductsResponse> => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong while fetching data");
  }

  const products: ProductsResponse = await res.json();
  return products;
};

export default async function Home(): Promise<JSX.Element> {
  const products = await getData();

  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
}
