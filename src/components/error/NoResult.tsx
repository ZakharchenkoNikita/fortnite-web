import { FC } from "react";
import { Container } from "react-bootstrap";
import MagnifyingGlass from "../../assets/svg/MagnifyingGlass";
import styles from "./Error.module.css";

interface NoResultProps {
  title: string;
  message: string;
}

const NoResult: FC<NoResultProps> = ({ title, message }) => {
  return (
    <Container>
      <div className={styles.error}>
        <MagnifyingGlass className={styles.icon} />
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </Container>
  );
};

export default NoResult;
