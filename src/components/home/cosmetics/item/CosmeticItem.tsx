import { FC } from "react";
import { Item } from "../../../../types/Item";
import styles from "./CosmeticItem.module.css";
import CosmeticCard from "../CosmeticCard";

interface CosmeticItemProps {
  cosmetic: Item;
}

const CosmeticItem: FC<CosmeticItemProps> = ({ cosmetic }) => {
  return (
    <div className={styles.cosmetic}>
      <div className={`${styles.card} ${styles[`${cosmetic.rarity.value}`]}`}>
        <img
          src={cosmetic.images.featured || cosmetic.images.icon}
          alt={cosmetic.name}
        />
      </div>
      <div className={styles.description}>
        <h1>{cosmetic.name}</h1>
        <strong>{cosmetic.id}</strong>

        <div>
          <span>{cosmetic.type.value}</span>
          <strong>&#9679;</strong>
          <span>{cosmetic.rarity.value}</span>
        </div>

        <p>
          {cosmetic.description} <br />
          {cosmetic.introduction.text}
        </p>
      </div>

      <div className={styles.actions}>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default CosmeticItem;
