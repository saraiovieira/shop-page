"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./Navbar.module.css";
import CartModal from "@/components/CartModal/CartModal";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <span className={styles.brandText}>Shop App</span>
      </Link>

      <div
        className={styles.cartContainer}
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <HiOutlineShoppingBag className={styles.shoppingIcon} />
        {totalQuantity > 0 && (
          <span className={styles.quantityBadge}>{totalQuantity}</span>
        )}
      </div>

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Navbar;
