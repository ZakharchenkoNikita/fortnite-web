import { Map } from "../types/Map";
import Image from "../types/Image";

interface MapInitialState {
  lastElement: string;
  lastImg: Image;
}

const getMapInitialState = (maps: Map[]): MapInitialState => {
  const lastElement = maps.at(maps.length - 1)?.patchVersion || "";
  const lastImg: Image = {
    src: maps.at(maps.length - 1)?.url || "",
    alt: maps.at(maps.length - 1)?.patchVersion || "",
  };

  return {
    lastElement,
    lastImg,
  };
};

export default getMapInitialState;
