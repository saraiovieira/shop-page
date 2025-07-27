"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Cart from "@/components/Cart/Cart";
import styles from "./CartModal.module.css";
import { HiX } from "react-icons/hi";

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close cart modal"
        >
          <HiX />
        </button>
        <Cart />
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default CartModal;
