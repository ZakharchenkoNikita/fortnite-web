import { FC } from "react";
import styles from "./TabTitle.module.css";

interface TabTitleProps {
  imageSrc: string;
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
}

const TabTitle: FC<TabTitleProps> = ({
  imageSrc,
  title,
  index,
  setSelectedTab,
}) => {
  return (
    <div className={`${styles.item}`}>
      <button onClick={() => setSelectedTab(index)}>
        <img src={imageSrc} alt="" />
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </button>
    </div>
  );
};

export default TabTitle;
