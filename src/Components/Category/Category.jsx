import React from "react";
import { categoryImage } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard.module";
import styles from "./Category.module.css";

function Category() {
  return (
    <div className={styles.categoryWrapper}>
      <section className={styles.categoryGrid}>
        {categoryImage.map((infos) => (
          <CategoryCard key={infos.name} data={infos} />
        ))}
      </section>
    </div>
  );
}

export default Category;
