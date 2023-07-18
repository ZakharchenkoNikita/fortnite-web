import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./CardTitle.module.css";

interface CardTitleProps {
  title: string;
  description: string;
  activeLink?: boolean;
  linkTo?: string;
}

const CardTitle: FC<CardTitleProps> = ({
  title,
  description,
  activeLink,
  linkTo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {activeLink && (
        <Link to={linkTo || "/"} className={styles.link}>
          View more &rarr;
        </Link>
      )}
    </div>
  );
};

export default CardTitle;
