import { Await, defer, useLoaderData, json } from "react-router-dom";
import LatestCosmetics from "../components/home/cosmetics/LatestCosmetics";
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
  const url = `${process.env.REACT_APP_API_LOAD_NEW_COSMETICS}`;
  const response = await fetch(url);

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
