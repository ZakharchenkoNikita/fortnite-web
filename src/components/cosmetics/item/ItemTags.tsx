import { FC } from "react";
import styles from "./ItemTags.module.css";

interface ItemTagsProps {
  tags: string[];
}

const ItemTags: FC<ItemTagsProps> = ({ tags }) => {
  return (
    <div className={styles.content}>
      <h3>Gameplay Tags</h3>
      <div className={styles.tags}>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default ItemTags;
