import { FC } from "react";
import { Item } from "../../../../types/Item";

interface CosmeticItemProps {
  cosmetic: Item;
}

const CosmeticItem: FC<CosmeticItemProps> = ({ cosmetic }) => {
  return <div>test</div>;
};

export default CosmeticItem;
