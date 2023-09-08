import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";
import { makeHttpRequest, RequestConfig } from "../helpers/makeHttpRequest";
import { CosmeticDetailsResult } from "../types/RequestResults";

import CosmeticItem from "../components/cosmetics/item/CosmeticItem";

const CosmeticDetail = () => {
  const { item }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={item}>
        {(loadedCosmetic) => <CosmeticItem cosmetic={loadedCosmetic} />}
      </Await>
    </Suspense>
  );
};

export default CosmeticDetail;

const loadItem = async (cosmeticId: string) => {
  const url = `https://fortniteapi.io/v2/items/get?id=${cosmeticId}&lang=en`;

  const config: RequestConfig = {
    url,
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  };

  const response = await makeHttpRequest<CosmeticDetailsResult>(config);

  if (response.result === false) {
    throw json(
      { message: "Could not fetch details for selected cosmetic." },
      {
        status: 200,
      }
    );
  }

  return response.item;
};

export const loader = async ({ params }: any) => {
  const id = params.cosmeticId;

  return defer({
    item: await loadItem(id),
  });
};
