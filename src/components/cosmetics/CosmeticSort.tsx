import { FC } from "react";

interface CosmeticSortProps {
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectTypeOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectTypeFromMenu: (type: string) => void;
}

const CosmeticSort: FC<CosmeticSortProps> = ({
  inputOnChange,
  selectTypeOnChange,
  selectTypeFromMenu,
}) => {
  return (
    <>
      <input type="text" placeholder="Jonesy" onChange={inputOnChange} />

      <select name="Type" id="type" onChange={selectTypeOnChange}>
        <option value="all">All</option>
        <option value="outfit">Outfit</option>
        <option value="backpack">Backpack</option>
      </select>
    </>
  );
};

export default CosmeticSort;
