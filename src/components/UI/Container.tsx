import React from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{props.children}</div>
    </section>
  );
};

export default Container;
