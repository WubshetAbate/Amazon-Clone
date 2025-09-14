import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        {/* Left: Logo + Delivery */}
        <div className={styles.left}>
          <a href="/" className={styles.logoLink}>
            <img
              src="../../../public/Amazon-Logo-White-PNG.png"
              alt="amazon.com"
              className={styles.logo}
            />
          </a>

          <a href="/" className={styles.delivery}>
            <GoLocation className={styles.icon} />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </a>
        </div>

        {/* Middle: Search */}
        <div className={styles.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Right: Links */}
        <div className={styles.right}>
          {/* Language */}
          <a href="/" className={styles.language}>
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US Flag"
              className={styles.flag}
            />
            <select>
              <option>EN</option>
            </select>
          </a>

          {/* Account & Lists */}
          <a href="/" className={styles.link}>
            <p>Sign in</p>
            <span>Account & Lists</span>
          </a>

          {/* Returns & Orders */}
          <a href="/" className={styles.link}>
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="/" className={styles.cart}>
            <FaShoppingCart className={styles.icon} /> <span>Cart</span>
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
