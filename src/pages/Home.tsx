import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Home from "../components/home/Home";

const HomePage = () => {
  const { cosmetics }: any = useLoaderData();
  return (
    <Suspense fallback="Loading...">
      <Await resolve={cosmetics}>
        {(loadedCosmetics) => <Home cosmetics={loadedCosmetics} />}
      </Await>
    </Suspense>
  );
};

export default HomePage;
