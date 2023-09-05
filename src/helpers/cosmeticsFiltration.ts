import { Item } from "../types/Item";

interface FiltrationParams {
  inputText: string;
  inputTypeSelect: string;
  inputRaritySelect: string;
}

const cosmeticsFiltration = (
  cosmetics: Item[],
  params: FiltrationParams
): Item[] => {
  let filteredCosmetics: Item[];

  filteredCosmetics = cosmetics
    .filter((item) => {
      return params.inputTypeSelect === "all"
        ? item
        : item.type.id === params.inputTypeSelect;
    })
    .filter((item) => {
      return params.inputRaritySelect === "All"
        ? item
        : item.rarity.id === params.inputRaritySelect;
    });

  return filteredCosmetics.filter((item) => {
    if (params.inputText === "") {
      return item;
    }

    return item.name.toLowerCase().includes(params.inputText);
  });
};

export default cosmeticsFiltration;
