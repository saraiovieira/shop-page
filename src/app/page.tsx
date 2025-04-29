import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./home.module.css";
import products from "./data.json";

const Home = () => {
  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Home;
