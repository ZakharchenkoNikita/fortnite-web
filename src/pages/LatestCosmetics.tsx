import { Await, defer, useLoaderData, json } from "react-router-dom";
import LatestCosmetics from "../components/cosmetics/latest/LatestCosmetics";
import { Suspense } from "react";
import { makeHttpRequest, RequestConfig } from "../helpers/makeHttpRequest";
import { LatestCosmeticsResult, NewsResult } from "../types/RequestResults";

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

  const config: RequestConfig = {
    url,
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  };

  const response = await makeHttpRequest<LatestCosmeticsResult>(config);

  if (response.result === false) {
    throw json(
      { message: "Could not fetch latest cosmetics" },
      {
        status: 200,
      }
    );
  }

  return response.items;
}

const loadNews = async () => {
  const url = `${process.env.REACT_APP_API_LOAD_NEWS}`;

  const config: RequestConfig = {
    url,
  };

  try {
    const response = await makeHttpRequest<NewsResult>(config);

    return response.data.br.motds;
  } catch (error) {
    console.log(error);
  }
};

export const loader = () => {
  return defer({
    cosmetics: loadCosmetics(),
    news: loadNews(),
  });
};
