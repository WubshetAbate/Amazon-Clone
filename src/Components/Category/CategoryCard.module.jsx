import React from "react";
import styles from "./CategoryCard.module.css";

function CategoryCard({ data }) {
  return (
    <div className={styles.card}>
      <a href="#">
        <h2 className={styles.title}>{data.title}</h2>
        <img className={styles.image} src={data.imgLink} alt={data.title} />
        <p className={styles.link}>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
