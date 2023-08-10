import { Await, defer, useLoaderData, json } from "react-router-dom";
import LatestCosmetics from "../components/cosmetics/latest/LatestCosmetics";
import { Suspense } from "react";

const NewCosmetics = () => {
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

export default NewCosmetics;

async function loadCosmetics() {
  const url = `https://fortniteapi.io/v2/items/upcoming?lang=en`;
  const response = await fetch(url, {
    headers: {
      Authorization: "8bfc7bf4-1f706d02-7e698a1e-59b90c83",
    },
  });

  if (response.ok) {
    const resData = await response.json();
    console.log(resData);

    return resData.items;
  } else {
    throw json(
      { message: "Could not fetch cosmetics." },
      {
        status: 400,
      }
    );
  }
}

const loadNews = async () => {
  const url = `${process.env.REACT_APP_API_LOAD_NEWS}`;

  const response = await fetch(url);

  if (response.ok) {
    const resData = await response.json();
    return resData.data.br.motds;
  } else {
    throw json(
      { message: "Could not fetch news." },
      {
        status: 400,
      }
    );
  }
};

export const loader = () => {
  return defer({
    cosmetics: loadCosmetics(),
    news: loadNews(),
  });
};
