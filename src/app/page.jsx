import ProductCard from "@/components/productCard/productCard";
import styles from "./home.module.css";
const { API_URL } = process.env;

const getData = async () => {
  const res = await fetch(`${API_URL}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Home = async () => {
  const products = await getData();

  return (
    <main className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Home;
