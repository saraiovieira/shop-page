import { useCart } from "@/context/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import formatPrice from "@/utils/formatPrice";

const Cart = () => {
  const { cart } = useCart();

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
          <div className={styles.emptyMessageContainer}>
            <p className={styles.emptyCartMessage}>
              Your cart is currently empty. Add some products to get started!
            </p>
          </div>
        </div>
      )}

      {!isEmptyCart && (
        <>
          <div>
            <ul className={styles.items}>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <div className={styles.cartSummary}>
            <p className={styles.summaryLabel}>Total Price:</p>
            <span className={styles.summaryValue}>
              {formatPrice(totalPrice)}
            </span>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
