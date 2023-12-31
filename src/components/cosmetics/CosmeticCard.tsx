import { FC } from "react";
import { Link } from "react-router-dom";

import vbuck from "./../../assets/img/vbuck.png";
import styles from "./CosmeticCard.module.css";

interface CosmeticProps {
  id: string;
  name: string;
  icon: string;
  rarity: string;
  finalPrice?: number;
}

const CosmeticCard: FC<CosmeticProps> = ({
  id,
  name,
  icon,
  rarity,
  finalPrice,
}) => {
  return (
    <Link to={`/cosmetics/${id}`}>
      <div className={`${styles.card} ${rarity}`}>
        <img src={icon} alt={name} />
        <div className={styles.description}>
          <span>{name}</span>
          {finalPrice && (
            <div className={styles.price}>
              <img src={vbuck} alt="vbuck" />
              <span>{finalPrice}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CosmeticCard;
