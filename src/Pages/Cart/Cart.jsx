import React from "react";
import { useCart } from "../../Components/Product/CartContext"; // import your CartContext hook
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, removeFromCart } = useCart(); // get items and remove function from context

  return (
    <section className={styles.cartWrapper}>
      <h1 className={styles.heading}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartGrid}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>
                  <strong>Price:</strong> ${item.price.toFixed(2)}
                </p>
                <p>
                  <strong>Qty:</strong> {item.quantity}
                </p>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;
