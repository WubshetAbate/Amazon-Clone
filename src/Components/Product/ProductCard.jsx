import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={styles.productCard}>
      <a href={`#product-${id}`}>
        <img className={styles.productImage} src={image} alt={title} />
      </a>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>({rating.count})</small>
        </div>
        <div className={styles.price}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
