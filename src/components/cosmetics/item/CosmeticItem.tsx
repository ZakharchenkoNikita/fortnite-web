import { FC } from "react";
import { Item } from "../../../types/Item";
import styles from "./CosmeticItem.module.css";
import ItemTags from "./ItemTags";
import ItemHistory from "./ItemHistory";
import ItemStyles from "./ItemStyles";
import ItemDescription from "./ItemDescription";

interface CosmeticItemProps {
  cosmetic: Item;
}

const CosmeticItem: FC<CosmeticItemProps> = ({ cosmetic }) => {
  let itemStyles;

  if (cosmetic.styles.length > 0) {
    itemStyles = (
      <ItemStyles itemStyles={cosmetic.styles} rarity={cosmetic.rarity.id} />
    );
  }

  return (
    <>
      <div className={styles.cosmetic}>
        <div className={`${styles.card} ${cosmetic.rarity.id}`}>
          <img
            src={cosmetic.images.featured || cosmetic.images.icon}
            alt={cosmetic.name}
          />
        </div>

        <div className={styles.description}>
          <ItemDescription
            id={cosmetic.id}
            name={cosmetic.name}
            type={cosmetic.type.id}
            rarity={cosmetic.rarity.id}
            description={cosmetic.description}
            introduction={cosmetic.introduction.text}
          />
        </div>
      </div>

      <div className={styles.info}>
        <ItemTags tags={cosmetic.gameplayTags} />
        <div>
          {itemStyles}

          <ItemHistory
            name={cosmetic.name}
            added={cosmetic.added.date}
            shopHistory={cosmetic.shopHistory}
          />
        </div>
      </div>
    </>
  );
};

export default CosmeticItem;
