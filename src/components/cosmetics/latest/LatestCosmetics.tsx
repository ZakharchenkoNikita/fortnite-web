import { FC } from "react";
// import { useLocation } from "react-router-dom";

import styles from "./LatestCosmetics.module.css";
import CosmeticCard from "../CosmeticCard";
import { Item } from "../../../types/Item";
import Cosmetics from "../Cosmetics";

interface LatestCosmeticsProps {
  cosmetics: Item[];
  numberOfItems: number;
}

const LatestCosmetics: FC<LatestCosmeticsProps> = ({
  cosmetics,
  numberOfItems,
}) => {
  // const location = useLocation();

  return (
    // <div className={styles.content}>
    //   {cosmetics
    //     .sort((a, b) => {
    //       return (
    //         new Date(b.added).setHours(0, 0, 0, 0) -
    //         new Date(a.added).setHours(0, 0, 0, 0)
    //       );
    //     })
    //     .filter((_, index) => index < numberOfItems)
    //     .map((cosmetic: Item) => {
    //       return (
    //         <CosmeticCard
    //           key={cosmetic.id}
    //           id={cosmetic.id}
    //           name={cosmetic.name}
    //           icon={cosmetic.images.icon}
    //           rarity={cosmetic.rarity.value}
    //         />
    //       );
    //     })}
    // </div>

    <Cosmetics
      title="Latest Cosmetics"
      description="Take a look at the new Fortnite cosmetics."
      cosmetics={cosmetics}
      numberOfItems={numberOfItems}
    />
  );
};

export default LatestCosmetics;
