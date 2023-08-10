import { FC } from "react";
import styles from "./ItemStyles.module.css";
import StyleCard from "./StyleCard";

interface ItemStylesProps {
  variants: any;
  rarity: string;
}

const ItemStyles: FC<ItemStylesProps> = ({ variants, rarity }) => {
  return (
    <div className={styles.content}>
      <div className={styles.styles}>
        <h3>Includes Styles</h3>
        <div className={styles.cards}>
          {variants.map((variant: any) => {
            return variant.options.map((option: any, index: number) => {
              return (
                <StyleCard
                  key={index}
                  name={option.name}
                  image={option.image}
                  rarity={rarity}
                />
              );
            });
          })}
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default ItemStyles;
