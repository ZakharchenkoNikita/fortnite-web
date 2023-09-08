import { Await, defer, useLoaderData, json } from "react-router-dom";
import { Suspense } from "react";
import { makeHttpRequest, RequestConfig } from "../helpers/makeHttpRequest";
import { ShopResult } from "../types/RequestResults";

import ItemShop from "../components/shop/ItemShop";

const ShopPage = () => {
  const { itemShop }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={itemShop}>
        {(loadedItemShop) => <ItemShop shop={loadedItemShop} />}
      </Await>
    </Suspense>
  );
};

export default ShopPage;

const loadItemShop = async () => {
  const url = "https://fortnite-api.com/v2/shop/br";

  const config: RequestConfig = {
    url,
  };

  try {
    const response = await makeHttpRequest<ShopResult>(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loader = () => {
  return defer({
    itemShop: loadItemShop(),
  });
};
