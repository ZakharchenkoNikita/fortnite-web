import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LatestCosmetics.module.css";
import Cosmetic from "./CosmeticCard";

interface Item {
  id: string;
  name: string;
  description: string;
  images: {
    icon: string;
    smallIcon: string;
  };
  type: {
    displayValue: string;
    value: string;
  };
  rarity: {
    value: string;
    displayValue: string;
  };
  added: string;
}

const defaultCosmetics: Item[] = [];

const LatestCosmetics = () => {
  const [cosmetics, setCosmetics] = useState<Item[]>(defaultCosmetics);

  useEffect(() => {
    axios
      .get("https://fortnite-api.com/v2/cosmetics/br/new")
      .then((response) => {
        setCosmetics(response.data.data.items);
      });
  }, []);

  console.log(cosmetics);

  return (
    <div className={styles.content}>
      {cosmetics
        // .sort((a, b) => {
        //   return (
        //     new Date(b.added).setHours(0, 0, 0, 0) -
        //     new Date(a.added).setHours(0, 0, 0, 0)
        //   );
        // })
        .filter((_, index) => index < 12)
        .map((cosmetic) => {
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
