import { FC } from "react";
import styles from "./LatestCosmetics.module.css";
import Cosmetic from "./CosmeticCard";
import { Item } from "../../../types/Item";

interface LatestCosmeticsProps {
  cosmetics: Item[];
  numberOfItems: number;
}

const LatestCosmetics: FC<LatestCosmeticsProps> = ({ cosmetics, numberOfItems }) => {
  return (
    <div className={styles.content}>
      {cosmetics
        .sort((a, b) => {
          return (
            new Date(b.added).setHours(0, 0, 0, 0) -
            new Date(a.added).setHours(0, 0, 0, 0)
          );
        })
        .filter((_, index) => index < numberOfItems)
        .map((cosmetic: Item) => {
          return (
            <Cosmetic
              key={cosmetic.id}
              id={cosmetic.id}
              name={cosmetic.name}
              icon={cosmetic.images.icon}
              rarity={cosmetic.rarity.value}
            />
          );
        })}
    </div>
  );
};

export default LatestCosmetics;
