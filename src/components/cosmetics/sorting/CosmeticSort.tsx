import { FC } from "react";
import styles from "./CosmeticSort.module.css";
import CustomSelect from "../../UI/Select/CustomSelect";
import Input from "../../UI/Input/Input";

const sortByOptions = [
  { value: "newest first", title: "Newest First" },
  { value: "oldest first", title: "Oldest First" },
  { value: "A to Z", title: "A to Z" },
  { value: "Z to A", title: "Z to A" },
];

const typeOptions = [
  { value: "all", title: "All" },
  { value: "outfit", title: "Outfit" },
  { value: "backpack", title: "Backpack" },
  { value: "emote", title: "Emotes" },
  { value: "pickaxe", title: "Pickaxes" },
];

const rarityOptions = [
  { value: "All", title: "All" },
  { value: "Common", title: "Common" },
  { value: "Uncommon", title: "Uncommon" },
  { value: "Epic", title: "Epic" },
  { value: "Legendary", title: "Legendary" },
  { value: "Rare", title: "Rare" },
  { value: "Mythic", title: "Mythic" },
  { value: "Transcendent", title: "Transcendent" },
];

interface CosmeticSortProps {
  inputSortBySelect: string;
  inputTypeSelect: string;
  inputRaritySelect: string;

  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectSortByOnChange: (selection: string) => void;
  selectTypeOnChange: (selection: string) => void;
  selectRarityOnChange: (selection: string) => void;
}

const CosmeticSort: FC<CosmeticSortProps> = ({
  inputSortBySelect,
  inputTypeSelect,
  inputRaritySelect,
  inputOnChange,
  selectSortByOnChange,
  selectTypeOnChange,
  selectRarityOnChange,
}) => {
  return (
    <div className={styles.content}>
      <Input
        id="type"
        type="text"
        placeholder="Jonesy"
        onChange={inputOnChange}
      />

      <div className={styles.selects}>
        <CustomSelect
          typeTitle="Sort by"
          selected={inputSortBySelect}
          options={sortByOptions}
          onChange={selectSortByOnChange}
        />

        <CustomSelect
          typeTitle="Type"
          selected={inputTypeSelect}
          options={typeOptions}
          onChange={selectTypeOnChange}
        />

        <CustomSelect
          typeTitle="Rarity"
          selected={inputRaritySelect}
          options={rarityOptions}
          onChange={selectRarityOnChange}
        />
      </div>
    </div>
  );
};

export default CosmeticSort;
