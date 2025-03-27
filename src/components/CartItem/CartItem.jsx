import React from "react";
import { useCart } from "@/context/CartContext";
import { HiMiniPlusCircle, HiMiniMinusCircle } from "react-icons/hi2";
import styles from "./CartItem.module.css";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";

const CartItem = ({ item }) => {
  const { updateItemQuantity } = useCart();

  return (
    <li className={styles.productsContainer} key={item.id}>
      <div className={styles.imgContainer}>
        <Image
          src={item.productPackaging.url}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.descContainer}>
          <div className={styles.nameContainer}>
            <p>{item.name}</p>
          </div>
          <div className={styles.priceContainer}>
            <p>{formatPrice(item.market_prices.full_price)}</p>
          </div>
        </div>
        <div>
          <div className={styles.cartControls}>
            <HiMiniMinusCircle
              onClick={() => updateItemQuantity(item.id, -1)}
              className={styles.minusIcon}
            />
            <span className={styles.quantity}>{item.quantity}</span>
            <HiMiniPlusCircle
              onClick={() => updateItemQuantity(item.id, 1)}
              className={styles.plusIcon}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
