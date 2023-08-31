import { FC } from "react";

import { Item } from "../../../types/Item";
import Cosmetics from "../Cosmetics";

interface LatestCosmeticsProps {
  cosmetics: Item[];
  numberOfItems: number;
}

const LatestCosmetics: FC<LatestCosmeticsProps> = ({
  cosmetics,
  numberOfItems,
}) => {
  return (
    <Cosmetics
      title="Latest Cosmetics"
      description="Take a look at the new Fortnite cosmetics."
      cosmetics={cosmetics}
      numberOfItems={numberOfItems}
    />
  );
};

export default LatestCosmetics;
