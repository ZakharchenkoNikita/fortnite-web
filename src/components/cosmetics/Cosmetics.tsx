import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Cosmetics.module.css";
import { Item } from "../../types/Item";
import CosmeticCard from "./CosmeticCard";
import CardTitle from "../home/card/CardTitle";

interface CosmeticsProps {
  title: string;
  description: string;
  cosmetics: Item[];
  numberOfItems: number;
}

const itemsPerPage = 36;

const Cosmetics: FC<CosmeticsProps> = ({
  title,
  description,
  cosmetics,
  numberOfItems,
}) => {
  const location = useLocation();

  const [nextPage, setNextPage] = useState(itemsPerPage);

  const handleMoreItems = () => {
    setNextPage(nextPage + itemsPerPage);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <CardTitle title={title} description={description} />
      )}

      <div className={styles.content}>
        {cosmetics
          .sort((a, b) => {
            return (
              new Date(a.added.date).setHours(0, 0, 0, 0) -
              new Date(b.added.date).setHours(0, 0, 0, 0)
            );
          })
          .slice(0, nextPage)
          .filter((_, index) => index < numberOfItems)
          .map((cosmetic: Item) => {
            return (
              <CosmeticCard
                key={cosmetic.id}
                id={cosmetic.id}
                name={cosmetic.name}
                icon={cosmetic.images.icon}
                rarity={cosmetic.rarity.id}
              />
            );
          })}
      </div>

      {location.pathname !== "/" && nextPage < cosmetics.length && (
        <button onClick={handleMoreItems}>Load more</button>
      )}
    </>
  );
};

export default Cosmetics;
