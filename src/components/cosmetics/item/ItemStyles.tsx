import { FC } from "react";
import styles from "./ItemStyles.module.css";
import StyleCard from "./StyleCard";

interface ItemStylesProps {
  itemStyles: any;
  rarity: string;
}

const ItemStyles: FC<ItemStylesProps> = ({ itemStyles, rarity }) => {
  return (
    <div className={styles.content}>
      <div className={styles.styles}>
        <h3>Includes Styles</h3>
        <div className={styles.cards}>
          {itemStyles.map((style: any, index: number) => {
            return (
              <StyleCard
                key={index}
                name={style.name}
                image={style.image}
                rarity={rarity}
              />
            );
          })}
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default ItemStyles;
