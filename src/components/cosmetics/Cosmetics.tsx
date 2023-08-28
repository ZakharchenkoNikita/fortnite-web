import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Cosmetics.module.css";
import { Item } from "../../types/Item";
import CosmeticCard from "./CosmeticCard";
import CardTitle from "../home/card/CardTitle";
import CosmeticSort from "./CosmeticSort";

interface CosmeticsProps {
  title: string;
  description: string;
  cosmetics: Item[];
  numberOfItems: number;
}

const itemsPerPage = 36;

let filteredCosmetics: Item[];
let searchedCosmetics: Item[];

const Cosmetics: FC<CosmeticsProps> = ({
  title,
  description,
  cosmetics,
  numberOfItems,
}) => {
  const location = useLocation();

  const [nextPage, setNextPage] = useState(itemsPerPage);
  const [inputText, setInputText] = useState("");
  const [inputTypeSelect, setInputTypeSelect] = useState("all");

  const pageHandler = () => {
    setNextPage(nextPage + itemsPerPage);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = event.target.value.toLocaleLowerCase();
    setInputText(lowerCase);
  };

  const selectTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputTypeSelect(event.target.value);
  };

  const selectTypeFromMenu = (type: string) => {
    setInputTypeSelect(type);
  };

  filteredCosmetics = cosmetics.filter((item) => {
    switch (inputTypeSelect) {
      case "all":
        return item;

      case "outfit":
        return item.type.id === "outfit";

      case "backpack":
        return item.type.id === "backpack";
    }
  });

  searchedCosmetics = filteredCosmetics.filter((item) => {
    if (inputText === "") {
      return item;
    }

    return item.name.toLowerCase().includes(inputText);
  });

  return (
    <>
      {location.pathname !== "/" && (
        <div style={{ position: "relative" }}>
          <CardTitle title={title} description={description} />
          <CosmeticSort
            inputOnChange={inputHandler}
            selectTypeOnChange={selectTypeHandler}
            selectTypeFromMenu={selectTypeFromMenu}
          />
        </div>
      )}

      <div className={styles.content}>
        {searchedCosmetics
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

      {location.pathname !== "/" && nextPage < searchedCosmetics.length && (
        <button onClick={pageHandler}>Show more</button>
      )}
    </>
  );
};

export default Cosmetics;
