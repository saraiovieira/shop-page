"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import {
  HiOutlineShoppingBag,
  HiMiniPlusCircle,
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
  const { cart, addToCart } = useCart();
  const productInCart = cart.find((item) => item.id === product.id);

  const addItemToCart = () => {
    if (!productInCart) {
      const cartItem: CartItem = {
        ...product,
        price: product.market_prices.full_price,
        quantity: 1,
      };
      addToCart(cartItem);
    }
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
        </div>
      </div>
    </div>
  );
}
