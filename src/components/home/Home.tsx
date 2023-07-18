import { Fragment, FC } from "react";
import HomeCard from "./card/HomeCard";
import LatestCosmetics from "./cosmetics/LatestCosmetics";

import { Item } from "../../types/Item";

interface HomeProps {
  cosmetics: Item[];
}

const Home: FC<HomeProps> = ({ cosmetics }) => {
  const numberOfItems = 12;

  return (
    <Fragment>
      <HomeCard
        title="Latest Cosmetics"
        description="Take a look at the new Fortnite cosmetics."
        activeLink={true}
        linkTo="/cosmetics"
        content={
          <LatestCosmetics
            cosmetics={cosmetics}
            numberOfItems={numberOfItems}
          />
        }
      />

      <HomeCard
        title="In-Game News"
        description="Take a look at the in-game news section."
      />
    </Fragment>
  );
};

export default Home;
