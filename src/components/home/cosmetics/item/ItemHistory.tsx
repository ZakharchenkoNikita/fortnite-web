import { FC, Fragment } from "react";
import styles from "./ItemHistory.module.css";
import HistoryElement from "./HistoryElement";

import { getHistory } from "../../../../helpers/itemHistory";

interface ItemHistoryProps {
  name: string;
  added: string;
  shopHistory: string[];
}

const ItemHistory: FC<ItemHistoryProps> = ({ name, added, shopHistory }) => {
  const { firstRelease, occurrences, lastSeen, updatedHistory } = getHistory(
    added,
    shopHistory
  );
  let content;

  if (shopHistory === null) {
    content = <p>{name} has not released in the Item Shop.</p>;
  } else {
    content = (
      <div className={styles.content}>
        <HistoryElement name="First Release" value={firstRelease} />
        <HistoryElement name="Occurrences" value={occurrences} />
        <HistoryElement name="Last Seen" value={lastSeen} />

        <div className={styles.border}></div>

        <div className={styles.history}>
          {updatedHistory.map((history, index) => {
            return (
              <HistoryElement
                key={index}
                name={history.date}
                value={history.days}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default ItemHistory;
