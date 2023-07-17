import { NavLink, Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import Logo from "../../assets/Logo";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/item-shop" className={styles.navLink}>
          Item Shop
        </NavLink>
        <NavLink to="/map" className={styles.navLink}>
          Map
        </NavLink>
        <NavLink to="/cosmetics" className={styles.navLink}>
          Cosmetics
        </NavLink>
      </nav>

      <Link to="/profile" className={styles.navLink}>
        immortalvelial
      </Link>
    </header>
  );
};

export default MainNavigation;
