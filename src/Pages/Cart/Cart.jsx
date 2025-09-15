import React from "react";
import styles from "./Cart.module.css";

function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Wireless Mouse",
      price: 25.99,
      image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg",
      quantity: 2,
    },
    {
      id: 2,
      title: "Bluetooth Headphones",
      price: 59.99,
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      quantity: 1,
    },
  ];

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
                  <strong>Price:</strong> ${item.price}
                </p>
                <p>
                  <strong>Qty:</strong> {item.quantity}
                </p>
                <button className={styles.removeBtn}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;
