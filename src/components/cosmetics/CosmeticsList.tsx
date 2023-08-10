import { FC } from "react";
import Cosmetics from "./Cosmetics";

interface CosmeticsListProps {
  allCosmetics: any[];
  numberOfItems: number;
}

const CosmeticsList: FC<CosmeticsListProps> = ({
  allCosmetics,
  numberOfItems,
}) => {
  const description = `Find all ${allCosmetics.length} Fortnite cosmetics.`;
  return (
    <Cosmetics
      title="Cosmetics"
      description={description}
      cosmetics={allCosmetics}
      numberOfItems={numberOfItems}
    />
  );
};

export default CosmeticsList;
