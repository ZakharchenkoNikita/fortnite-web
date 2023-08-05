import { FC } from "react";
import styles from "./NewsTab.module.css";

interface NewsTabProps {
  title: string;
  tabTitle: string;
  body: string;
  imgSrc: string;
}

const NewsTab: FC<NewsTabProps> = ({ tabTitle, title, body, imgSrc }) => {
  return (
    <div className={styles.content}>
      <img src={imgSrc} alt="" />
      <div className={styles.description}>
        <h4>{tabTitle}</h4>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default NewsTab;
