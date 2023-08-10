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
  const url = `${process.env.REACT_APP_API_LOAD_DETAIL_COSMETIC + cosmeticId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected cosmetic." },
      {
        status: 400,
      }
    );
  } else {
    const resData = await response.json();

    return resData.data;
  }
};

export const loader = async ({ params }: any) => {
  const id = params.cosmeticId;

  return defer({
    item: await loadItem(id),
  });
};
