import Container from "../UI/Container";
import HomeCard from "../UI/HomeCard/HomeCard";

import LatestCosmetics from "./cosmetics/LatestCosmetics";

const Home = () => {
  return (
    <Container>
      <HomeCard
        title="Latest Cosmetics"
        description="Take a look at the new Fortnite cosmetics."
        activeLink={true}
        linkTo="/"
        content={<LatestCosmetics />}
      />

      <HomeCard
        title="In-Game News"
        description="Take a look at the in-game news section."
      />
    </Container>
  );
};

export default Home;
