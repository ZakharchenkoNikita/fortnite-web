import { NavLink, Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import Logo from "../../assets/svg/Logo";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>

      {/* <nav className={styles.nav}>
        <NavLink to="/item-shop" className={styles.navLink}>
          Item Shop
        </NavLink>
        <NavLink to="/map" className={styles.navLink}>
          Map
        </NavLink>
        <NavLink to="/cosmetics" className={styles.navLink}>
          Cosmetics
        </NavLink>
      </nav> */}

      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/item-shop"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Item Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cosmetics"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Cosmetics
            </NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/profile" className={styles.navLink}>
        immortalvelial
      </Link>
    </header>
  );
};

export default MainNavigation;
