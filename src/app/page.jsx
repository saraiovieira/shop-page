import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./home.module.css";
import products from "./data.json"; // adjust path if needed

export default function Home() {
  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
}
