import React from "react";
import { useCart } from "../../Components/Product/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  } = useCart();

  // calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.cartWrapper}>
      <h1 className={styles.heading}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartGrid}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />

                <div className={styles.info}>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </p>

                  <div className={styles.quantityControls}>
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item)}>+</button>
                  </div>

                  <p>
                    <strong>Subtotal:</strong> $
                    {(item.price * item.quantity).toFixed(2)}
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

          {/* Cart Summary */}
          <div className={styles.summaryBox}>
            <h2>Order Summary</h2>
            <p>
              <strong>
                Total ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                items):
              </strong>{" "}
              ${total.toFixed(2)}
            </p>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
            <button className={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
