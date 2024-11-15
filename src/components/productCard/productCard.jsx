"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import {
  HiOutlineShoppingBag,
  HiMiniPlusCircle,
  HiMiniMinusCircle,
} from "react-icons/hi2";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useCart();
  const [showControls, setShowControls] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const productInCart = parsedCart.find((item) => item.id === product.id);
      setQuantity(productInCart ? productInCart.quantity : 0);
    }

  }, []);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  const incrementQuantity = () => {
    addToCart(product);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    removeFromCart(product.id);
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={product.productPackaging.url}
          className={styles.img}
          alt="Product Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
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
        <div className={styles.cartIconsContainer}>
          <div
            className={`${styles.cartIcons} ${
              !showControls ? `${styles.show}` : `${styles.hide}`
            }`}
            onClick={toggleControls}
          >
            <HiOutlineShoppingBag className={styles.shoppingIcon} />
            <HiMiniPlusCircle
              className={styles.addToCartIcon}
              title="Add to Cart"
            />
          </div>
          <div
            className={`${styles.cartControls} ${
              showControls ? `${styles.show}` : `${styles.hide}`
            }`}
          >
            <HiMiniMinusCircle
              onClick={decrementQuantity}
              className={styles.minusIcon}
            />
            <span className={styles.quantity}>{quantity}</span>
            <HiMiniPlusCircle
              onClick={incrementQuantity}
              className={styles.plusIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
