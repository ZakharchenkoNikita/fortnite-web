import { FC } from "react";
import styles from "./CustomSelect.module.css";

import ChevronUp from "../../../assets/svg/ChevronUp";
import ChevronDown from "../../../assets/svg/ChevronDown";

import useClickOutside from "../../../hooks/useClickOutside";

interface Option {
  value: string;
  title: string;
}

interface CustomSelectProps {
  typeTitle: string;
  options: Option[];
  selected: string;
  onChange: (selection: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  typeTitle,
  selected,
  options,
  onChange,
}) => {
  const { opened, setOpened, hookRef } = useClickOutside();

  return (
    <div className={styles["select-component"]} ref={hookRef}>
      <button className={styles.select} onClick={() => setOpened(!opened)}>
        <span>{typeTitle}:</span>
        <span>{selected}</span>

        {opened ? (
          <ChevronUp className={styles.arrow} />
        ) : (
          <ChevronDown className={styles.arrow} />
        )}
      </button>
      {opened && (
        <div
          className={`${styles.options} ${
            opened ? styles.active : styles.inactive
          }`}
        >
          {options.map((option) => (
            <div
              className={styles.option}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpened(false);
              }}
            >
              <span>{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
