import { FC, Fragment } from "react";
import { Item } from "../../../../types/Item";
import styles from "./CosmeticItem.module.css";
import ItemTags from "./ItemTags";
import ItemHistory from "./ItemHistory";
import ItemStyles from "./ItemStyles";

interface CosmeticItemProps {
  cosmetic: Item;
}

const CosmeticItem: FC<CosmeticItemProps> = ({ cosmetic }) => {
  let itemStyles;

  if (cosmetic.variants !== null) {
    itemStyles = (
      <ItemStyles variants={cosmetic.variants} rarity={cosmetic.rarity.value} />
    );
  }

  return (
    <Fragment>
      <div className={styles.cosmetic}>
        <div className={`${styles.card} ${cosmetic.rarity.value}`}>
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
            <span>{cosmetic.rarity.displayValue}</span>
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

      <div className={styles.info}>
        <ItemTags tags={cosmetic.gameplayTags} />
        <div>
          {itemStyles}

          <ItemHistory
            name={cosmetic.name}
            added={cosmetic.added}
            shopHistory={cosmetic.shopHistory}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CosmeticItem;
