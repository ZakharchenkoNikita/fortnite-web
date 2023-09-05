import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Cosmetics.module.css";
import { Item } from "../../types/Item";
import CosmeticCard from "./CosmeticCard";
import CardTitle from "../home/card/CardTitle";
import CosmeticSort from "./sorting/CosmeticSort";
import cosmeticsFiltration from "../../helpers/cosmeticsFiltration";
import NoResult from "../error/NoResult";

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
  const [inputText, setInputText] = useState("");

  const [inputTypeSelect, setInputTypeSelect] = useState("all");
  const [inputRaritySelect, setInputRaritySelect] = useState("All");

  const pageHandler = () => {
    setNextPage(nextPage + itemsPerPage);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = event.target.value.toLocaleLowerCase();
    setInputText(lowerCase);
  };

  const selectTypeHandler = (selection: string) => {
    setInputTypeSelect(selection);
  };

  const selectRarityHandler = (selection: string) => {
    setInputRaritySelect(selection);
  };

  const filteredCosmetics = cosmeticsFiltration(cosmetics, {
    inputText,
    inputTypeSelect,
    inputRaritySelect,
  });

  return (
    <>
      {location.pathname !== "/" && (
        <div>
          <CardTitle title={title} description={description} />
          <CosmeticSort
            inputTypeSelect={inputTypeSelect}
            inputRaritySelect={inputRaritySelect}
            inputOnChange={inputHandler}
            selectTypeOnChange={selectTypeHandler}
            selectRarityOnChange={selectRarityHandler}
          />
        </div>
      )}

      {filteredCosmetics.length > 0 ? (
        <div className={styles.content}>
          {filteredCosmetics
            // .sort((a, b) => {
            //   return (
            //     new Date(a.added.date).setHours(0, 0, 0, 0) -
            //     new Date(b.added.date).setHours(0, 0, 0, 0)
            //   );
            // })
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
      ) : (
        <NoResult
          title="No results"
          message="Adjust your search and try again."
        />
      )}

      {location.pathname !== "/" && nextPage < filteredCosmetics.length && (
        <button onClick={pageHandler}>Show more</button>
      )}
    </>
  );
};

export default Cosmetics;
