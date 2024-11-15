import ProductCard from "@/components/productCard/productCard";
import styles from "./home.module.css";
const { API_URL } = process.env;

const getData = async () => {
  const res = await fetch(`${API_URL}`, {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Home = async () => {
  const posts = await getData();

  return (
    <main className={styles.container}>
      {posts.map((post) => (
        <ProductCard post={post} key={post.id}/>
      ))}

 
    </main>
  );
};

export default Home;
