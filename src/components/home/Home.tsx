import { Fragment } from "react";
import HomeCard from "./card/HomeCard";

import LatestCosmetics from "./cosmetics/LatestCosmetics";

const Home = () => {
  return (
    <Fragment>
      <HomeCard
        title="Latest Cosmetics"
        description="Take a look at the new Fortnite cosmetics."
        activeLink={true}
        linkTo="/cosmetics"
        content={<LatestCosmetics />}
      />

      <HomeCard
        title="In-Game News"
        description="Take a look at the in-game news section."
      />
    </Fragment>
  );
};

export default Home;
