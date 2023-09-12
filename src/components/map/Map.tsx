import { FC, useState } from "react";
import ComparisonSlider from "../UI/ComparisonSlider/ComparisonSlider";
import Image from "../../types/Image";
import CustomSelect, { Option } from "../UI/Select/CustomSelect";
import { Map } from "../../types/Map";
import getMapInitialState from "../../helpers/mapEvolution";
import styles from "./Map.module.css";

interface MapProps {
  maps: Map[];
}

const MapEvolution: FC<MapProps> = ({ maps }) => {
  const { lastElement, lastImg } = getMapInitialState(maps);

  const [selectedLeftImg, setSelectedLeftImg] = useState<string>(lastElement);
  const [selectedRightImg, setSelectedRightImg] = useState<string>(lastElement);

  const [topImage, setTopImage] = useState<Image>(lastImg);
  const [bottomImage, setBottomImage] = useState<Image>(lastImg);

  const getImg = (rightSelection: string, leftSelection: string) => {
    maps.filter((map) => {
      switch (map.patchVersion) {
        case rightSelection:
          const bottomImg = { src: map.url, alt: map.patchVersion };
          return setBottomImage(bottomImg);

        case leftSelection:
          const topImg = { src: map.url, alt: map.patchVersion };
          return setTopImage(topImg);

        default:
          return false;
      }
    });
  };

  const leftImgHandler = (selection: string) => {
    setSelectedLeftImg(selection);
    getImg("", selection);
  };

  const rightImgHandler = (selection: string) => {
    setSelectedRightImg(selection);
    getImg(selection, "");
  };

  const mapOptions: Option[] = [];

  maps.forEach((map) => {
    mapOptions.push({ value: map.patchVersion, title: map.patchVersion });
  });

  const sortedMap = mapOptions.reverse();

  return (
    <div className={styles.map}>
      <CustomSelect
        typeTitle="Map vesrion"
        options={sortedMap}
        selected={selectedLeftImg}
        onChange={leftImgHandler}
      />

      <ComparisonSlider topImage={topImage} bottomImage={bottomImage} />

      <CustomSelect
        typeTitle="Map vesrion"
        options={sortedMap}
        selected={selectedRightImg}
        onChange={rightImgHandler}
      />
    </div>
  );
};

export default MapEvolution;
