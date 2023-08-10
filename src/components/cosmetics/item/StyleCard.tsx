import { FC } from "react";
import styles from "./StyleCard.module.css";

interface StyleCardProps {
  name: string;
  image: string;
  rarity: string;
}

const StyleCard: FC<StyleCardProps> = ({ name, image, rarity }) => {
  return (
    <div className={`${styles.card} ${rarity}`}>
      <img src={image} alt={name} />
    </div>
  );
};

export default StyleCard;
