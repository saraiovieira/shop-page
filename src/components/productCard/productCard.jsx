import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./productCard.module.css";

const ProductCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.productPackaging.url}
          className={styles.img}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.descContainer}>
          <p>{post.name}</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(post.market_prices.full_price)}
            
          </p>
        </div>
        <HiOutlineShoppingBag className={styles.shoppingIcon} />
      </div>
    </div>
  );
};

export default ProductCard;