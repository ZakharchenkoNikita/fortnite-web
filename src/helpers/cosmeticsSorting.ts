import { Item } from "../types/Item";

const cosmeticsSorting = (
  filteredCosmetics: any,
  inputSortBySelect: string
): Item[] => {
  return filteredCosmetics.sort((a: Item, b: Item) => {
    switch (inputSortBySelect) {
      case "newest first":
        return (
          new Date(b.added.date).setHours(0, 0, 0, 0) -
          new Date(a.added.date).setHours(0, 0, 0, 0)
        );

      case "oldest first":
        return (
          new Date(a.added.date).setHours(0, 0, 0, 0) -
          new Date(b.added.date).setHours(0, 0, 0, 0)
        );

      case "A to Z":
        return a.name.localeCompare(b.name);

      case "Z to A":
        return b.name.localeCompare(a.name);

      default:
        break;
    }
  });
};

export default cosmeticsSorting;
