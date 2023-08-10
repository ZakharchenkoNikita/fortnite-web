import { FC } from "react";
import styles from "./HistoryElement.module.css";

interface HistoryElementProps {
  name: string;
  value: string;
}

const HistoryElement: FC<HistoryElementProps> = ({ name, value }) => {
  return (
    <div className={styles.element}>
      <strong>{name}</strong>
      <div className={styles.border}></div>
      <span>{value}</span>
    </div>
  );
};

export default HistoryElement;
