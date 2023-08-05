import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Home from "../components/home/Home";

const HomePage = () => {
  const { cosmetics, news }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={cosmetics}>
        {(loadedCosmetics) => {
          return (
            <Await resolve={news}>
              {(loadedNews) => {
                return <Home cosmetics={loadedCosmetics} news={loadedNews} />;
              }}
            </Await>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default HomePage;
