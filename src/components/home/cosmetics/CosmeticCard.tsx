import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./CosmeticCard.module.css";

interface CosmeticProps {
  id: string;
  name: string;
  icon: string;
  rarity: string;
}

const Cosmetic: FC<CosmeticProps> = ({ id, name, icon, rarity }) => {
  return (
    <div className={`${styles.card} ${styles[`${rarity}`]}`}>
      <Link to={`/${id}`}>
        <img src={icon} alt={name} />
        <div className={styles.name}>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Cosmetic;
