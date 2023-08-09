import { Await, defer, useLoaderData, json } from "react-router-dom";
import { Suspense } from "react";

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
  const response = await fetch("https://fortnite-api.com/v2/shop/br");

  if (response.ok) {
    const resData = await response.json();
    return resData.data;
  } else {
    throw json(
      { message: "Could not fetch shop items." },
      {
        status: 400,
      }
    );
  }
};

export const loader = () => {
  return defer({
    itemShop: loadItemShop(),
  });
};
