import { Fragment, FC } from "react";
import styles from "./HomeCard.module.css";
import CardTitle from "./CardTitle";

interface HomeCardProps {
  title: string;
  description: string;
  content?: any;
  activeLink?: boolean;
  linkTo?: string;
}

const HomeCard: FC<HomeCardProps> = ({
  title,
  description,
  content,
  activeLink,
  linkTo,
}) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <CardTitle
          title={title}
          description={description}
          activeLink={activeLink}
          linkTo={linkTo}
        />
        <div className={styles.content}>{content}</div>
      </div>
    </Fragment>
  );
};

export default HomeCard;
