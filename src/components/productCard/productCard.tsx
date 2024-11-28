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

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  market_prices: {
    full_price: number;
  };
  productPackaging: {
    url: string;
  };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps): JSX.Element {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const productInCart = parsedCart.find(
        (item: CartItem) => item.id === product.id
      );
      setQuantity(productInCart ? productInCart.quantity : 0);
    }
  }, [product.id]);

  const incrementQuantity = () => {
    const cartItem: CartItem = {
      ...product,
      price: product.market_prices.full_price,
      quantity: 1,
    };
    addToCart(cartItem);
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
        <div className={styles.cartIconsContainer}>
          <div className={styles.cartIcons} onClick={incrementQuantity}>
            <HiOutlineShoppingBag className={styles.shoppingIcon} />
            <HiMiniPlusCircle
              className={styles.addToCartIcon}
              title="Add to Cart"
            />
          </div>
          {quantity > 0 && (
            <div className={styles.cartControls}>
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
          )}
        </div>
      </div>
    </div>
  );
}
