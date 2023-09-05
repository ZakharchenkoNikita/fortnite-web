import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
}

const Input: FC<InputProps> = ({ id, type, ...rest }) => {
  return <input id={id} type={type} {...rest} className={styles.input} />;
};

export default Input;
