import { FC } from "react";

interface ItemDescriptionProps {
  id: string;
  name: string;
  type: string;
  rarity: string;
  description: string;
  introduction: string;
}

const ItemDescription: FC<ItemDescriptionProps> = ({
  id,
  name,
  type,
  rarity,
  description,
  introduction,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <strong>{id}</strong>

      <div>
        <span>{type}</span>
        <strong>&#9679;</strong>
        <span>{rarity}</span>
      </div>

      <p>
        {description} <br />
        {"" && introduction}
      </p>
    </>
  );
};

export default ItemDescription;
