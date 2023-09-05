import { FC } from "react";
import styles from "./CosmeticSort.module.css";
import CustomSelect from "../../UI/Select/CustomSelect";
import Input from "../../UI/Input/Input";

const typeOptions = [
  { value: "all", title: "All" },
  { value: "outfit", title: "Outfit" },
  { value: "backpack", title: "Backpack" },
  { value: "emote", title: "Emotes" },
  { value: "pickaxe", title: "Pickaxes" },
];

const rarityOptions = [
  { value: "All", title: "All" },
  { value: "Legendary", title: "Legendary" },
  { value: "Rare", title: "Rare" },
  { value: "Epic", title: "Epic" },
];

interface CosmeticSortProps {
  inputTypeSelect: string;
  inputRaritySelect: string;

  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectTypeOnChange: (selection: string) => void;
  selectRarityOnChange: (selection: string) => void;
}

const CosmeticSort: FC<CosmeticSortProps> = ({
  inputTypeSelect,
  inputRaritySelect,
  inputOnChange,
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
