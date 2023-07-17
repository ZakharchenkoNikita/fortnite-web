import { Link } from "react-router-dom";
import { Fragment, FC } from "react";
import styles from "./HomeCard.module.css";

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
  const linkContent = activeLink && (
    <Link to={linkTo || "/"} className={styles.link}>
      View more &rarr;
    </Link>
  );

  return (
    <Fragment>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          {linkContent}
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    </Fragment>
  );
};

export default HomeCard;
