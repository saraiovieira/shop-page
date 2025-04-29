"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Cart from "@/components/Cart/Cart";
import styles from "./CartModal.module.css";

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (dialogRef.current && isClient) {
      dialogRef.current.showModal();
    }
  }, [isClient]);

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  };

  return (
    isClient &&
    createPortal(
      <dialog ref={dialogRef} className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <div className={styles.modalContent}>
          <Cart />
        </div>
      </dialog>,
      document.getElementById("modal") as HTMLElement
    )
  );
};

export default CartModal;
