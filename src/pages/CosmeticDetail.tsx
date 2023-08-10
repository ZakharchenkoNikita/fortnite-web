import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";
import CosmeticItem from "../components/cosmetics/item/CosmeticItem";

const CosmeticDetail = () => {
  const { item }: any = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={item}>
        {(loadedCosmetic) => <CosmeticItem cosmetic={loadedCosmetic} />}
      </Await>
    </Suspense>
  );
};

export default CosmeticDetail;

const loadItem = async (cosmeticId: string) => {
  const url = `https://fortniteapi.io/v2/items/get?id=${cosmeticId}&lang=en`;

  const response = await fetch(url, {
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  });

  const resData = await response.json();

  if (resData.result === false) {
    throw json({ message: "Could not fetch details for selected cosmetic." });
  }

  return resData.item;
};

export const loader = async ({ params }: any) => {
  const id = params.cosmeticId;

  return defer({
    item: await loadItem(id),
  });
};
