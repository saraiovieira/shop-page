import ProductCard from "@/components/productCard/productCard";
import styles from "./home.module.css";

const getData = async () => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong while fetching data");
  }

  const products = await res.json();
  return products;
};

export default async function Home() {
  const products = await getData();

  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
}