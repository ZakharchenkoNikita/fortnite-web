import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import CosmeticItem from "../components/home/cosmetics/item/CosmeticItem";

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
  const response = await fetch(
    "https://fortnite-api.com/v2/cosmetics/br/" + cosmeticId
  );

  if (response.ok) {
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
