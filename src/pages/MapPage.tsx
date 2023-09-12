import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";
import { RequestConfig } from "../helpers/makeHttpRequest";
import { MapResult } from "../types/RequestResults";
import { makeHttpRequest } from "../helpers/makeHttpRequest";
import MapEvolution from "../components/map/Map";

const MapPage = () => {
  const topImage = {
    src: "https://media.fortniteapi.io/images/maps/map-25.30.png",
    alt: "",
  };

  const bottomImage = {
    src: "https://media.fortniteapi.io/images/maps/map-26.00.png",
    alt: "",
  };

  const { maps }: any = useLoaderData();

  return (
    <Suspense fallback="Loading...">
      <Await resolve={maps}>
        {(loadedMaps) => <MapEvolution maps={loadedMaps} />}
      </Await>
    </Suspense>
  );
};

export default MapPage;

const loadMaps = async () => {
  const url = "https://fortniteapi.io/v1/maps/list";

  const config: RequestConfig = {
    url,
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  };

  const response = await makeHttpRequest<MapResult>(config);

  if (response.result === false) {
    throw json(
      { message: "Could not fetch map." },
      {
        status: 200,
      }
    );
  }

  return response.maps;
};

export const loader = async () => {
  return defer({
    maps: await loadMaps(),
  });
};
