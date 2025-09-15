import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom"; // ✅ import Link
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        {/* Left: Logo + Delivery */}
        <div className={styles.left}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="../../../public/Amazon-Logo-White-PNG.png"
              alt="amazon.com"
              className={styles.logo}
            />
          </Link>

          <Link to="/" className={styles.delivery}>
            <GoLocation className={styles.icon} />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </Link>
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
          {/* Language (not a route, stays as is) */}
          <div className={styles.language}>
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US Flag"
              className={styles.flag}
            />
            <select>
              <option>EN</option>
            </select>
          </div>

          {/* Account & Lists -> /auth */}
          <Link to="/auth" className={styles.link}>
            <p>Sign in</p>
            <span>Account & Lists</span>
          </Link>

          {/* Returns & Orders -> /orders */}
          <Link to="/orders" className={styles.link}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart -> /cart */}
          <Link to="/cart" className={styles.cart}>
            <FaShoppingCart className={styles.icon} /> <span>Cart</span>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
