import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import Container from "../UI/Container";

interface ErroProps {
  title: string;
  message: string;
}

const CustomError: FC<ErroProps> = ({ title, message }) => {
  return (
    <Container>
      <div className={styles.error}>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default CustomError;
