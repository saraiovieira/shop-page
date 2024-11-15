"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./navbar.module.css";
import Cart from "@/components/cart/cart";
import { useState } from "react";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/kencko-logo.svg"
          alt=""
          fill
          className={styles.logo}
        ></Image>
      </Link>
      <div className={styles.cartContainer} onClick={toggleCart}>
        <HiOutlineShoppingBag className={styles.shoppingIcon} />
        {totalQuantity > 0 && (
          <span className={styles.quantityBadge}>{totalQuantity}</span>
        )}
        <div
          className={`${styles.modal} ${
            isCartOpen ? `${styles.show}` : `${styles.hide}`
          }`}
        >
          <button className={styles.closeButton} onClick={closeCart}>
            X
          </button>
          <div className={styles.modalContent}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
