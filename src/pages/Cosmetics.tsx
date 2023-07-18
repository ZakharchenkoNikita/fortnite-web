import { Await, defer, useLoaderData, json } from "react-router-dom";
import LatestCosmetics from "../components/home/cosmetics/LatestCosmetics";
import { Suspense } from "react";

const Cosmetics = () => {
  const { cosmetics }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={cosmetics}>
        {(loadedCosmetics) => (
          <LatestCosmetics
            cosmetics={loadedCosmetics}
            numberOfItems={loadedCosmetics.length}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default Cosmetics;

async function loadCosmetics() {
  const response = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");

  if (response.ok) {
    const resData = await response.json();
    return resData.data.items;
  } else {
    throw json(
      { message: "Could not fetch cosmetics." },
      {
        status: 400,
      }
    );
  }
}

export const loader = () => {
  return defer({
    cosmetics: loadCosmetics(),
  });
};
