import { Await, defer, useLoaderData, json } from "react-router-dom";
import { Suspense } from "react";

import CosmeticsList from "../components/cosmetics/CosmeticsList";

const CosmeticsPage = () => {
  const { allCosmetics }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={allCosmetics}>
        {(loadedCosmetics) => (
          <CosmeticsList
            allCosmetics={loadedCosmetics}
            numberOfItems={loadedCosmetics.length}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default CosmeticsPage;

const loadAllCosmetics = async () => {
  const url = "https://fortniteapi.io/v2/items/list?lang=en";

  const response = await fetch(url, {
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  });

  const resData = await response.json();

  if (resData.result === false) {
    throw json({ message: "Could not fetch cosmetics." });
  }

  return resData.items;
};

export const loader = () => {
  return defer({
    allCosmetics: loadAllCosmetics(),
  });
};
