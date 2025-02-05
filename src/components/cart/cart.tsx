import React, { ReactNode, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  HiOutlineShoppingBag,
  HiMiniPlusCircle,
  HiMiniMinusCircle,
} from "react-icons/hi2";
import styles from "./cart.module.css";
import Image from "next/image";

export default function Cart(): ReactNode {
  const { cart, updateItemQuantity } = useCart();
  const isEmptyCart = cart.length === 0;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.market_prices.full_price,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {isEmptyCart && (
        <div className={styles.emptyContainer}>
          <HiOutlineShoppingBag className={styles.shoppingIcon} />
          <p className={styles.emptyCartMessage}>
            Your cart is currently empty. Add some products to get started!
          </p>
        </div>
      )}

      {!isEmptyCart && (
        <>
          <div className={styles.cartSummary}>
            <ul>
              {cart.map((item) => (
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
                        <p>
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.market_prices.full_price)}
                        </p>
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
              ))}
            </ul>
          </div>

          <div className={styles.cartSummary}>
            <p className={styles.summaryLabel}>Total Price:</p>
            <span className={styles.summaryValue}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totalPrice)}
            </span>

            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
