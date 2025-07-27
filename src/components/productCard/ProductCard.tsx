"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiOutlineShoppingBag,
  HiMiniPlusCircle,
} from "react-icons/hi2";
import styles from "./ProductCard.module.css";

interface Product {
  id: string;
  name: string;
  productPackaging: {
    url: string;
  };
  market_prices: {
    full_price: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart } = useCart();
  const productInCart = cart.find((item) => item.id === product.id);
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "success" | "warning" | "";
  }>({ message: "", type: "" });

  const addItemToCart = () => {
    let timer: ReturnType<typeof setTimeout>;

    if (!productInCart) {
      const cartItem = {
        ...product,
        quantity: 1,
      };
      addToCart(cartItem);
      setFeedback({ message: "Added to cart!", type: "success" });
    } else {
      setFeedback({ message: "Already in cart", type: "warning" });
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      setFeedback({ message: "", type: "" });
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={product.productPackaging.url}
          className={styles.img}
          alt={`${product.name} Image`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.descContainer}>
          <p>{product.name}</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.market_prices.full_price)}
          </p>
        </div>
        <div>
          <div className={styles.cartIcons} onClick={addItemToCart}>
            <HiOutlineShoppingBag className={styles.shoppingIcon} />
            <HiMiniPlusCircle
              className={styles.addToCartIcon}
              title="Add to Cart"
            />
          </div>
          {feedback.message && (
            <div
              className={`${styles.feedback} ${styles[feedback.type]}`}
              role="alert"
              aria-live="assertive"
            >
              {feedback.type === "success" ? (
                <HiCheckCircle className={styles.icon} />
              ) : (
                <HiExclamationCircle className={styles.icon} />
              )}
              <span className={styles.text}>{feedback.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
