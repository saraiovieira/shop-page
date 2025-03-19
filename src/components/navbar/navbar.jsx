"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./navbar.module.css";
import Cart from "@/components/cart/cart";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);
  const dialog = useRef(null);

  useEffect(() => {
    if (isCartOpen && dialog.current) {
      dialog.current.showModal();
    } else if (!isCartOpen && dialog.current) {
      dialog.current.close();
    }
  }, [isCartOpen]);

  useEffect(() => {
    setModalRoot(document.getElementById("modal"));
  }, []);

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
        <span className={styles.brandText}>Shop App</span>{" "}
      </Link>
      <div className={styles.cartContainer} onClick={toggleCart}>
        <HiOutlineShoppingBag className={styles.shoppingIcon} />
        {totalQuantity > 0 && (
          <span className={styles.quantityBadge}>{totalQuantity}</span>
        )}
      </div>
      {modalRoot &&
        createPortal(
          <dialog
            ref={dialog}
            className={`${styles.modal} ${
              isCartOpen ? styles.show : styles.hide
            }`}
          >
            <button className={styles.closeButton} onClick={closeCart}>
              X
            </button>
            <div className={styles.modalContent}>
              <Cart />
            </div>
          </dialog>,
          modalRoot
        )}
    </div>
  );
}
