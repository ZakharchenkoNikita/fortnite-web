import { FC } from "react";
import { Shop } from "../../types/Shop";
import styles from "./ItemShop.module.css";
import CosmeticCard from "../home/cosmetics/CosmeticCard";

import { getReleaseDate } from "../../helpers/itemHistory";
import { ShopItem } from "../../types/Item";

import joinShopEntries from "../../helpers/itemShop";

interface ItemShopProps {
  shop: Shop;
}

const ItemShop: FC<ItemShopProps> = ({ shop }) => {
  const date = getReleaseDate(shop.date);

  const allShopItems = joinShopEntries(shop);

  return (
    <>
      <div className={styles.header}>
        <h2>{date}</h2>
      </div>

      {allShopItems.map((entry: any, index) => {
        return (
          <div key={index} className={styles.section}>
            <h3>{entry.name}</h3>
            <div className={styles.content}>
              {entry.items.map((item: ShopItem) => {
                return (
                  <CosmeticCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    finalPrice={item.finalPrice}
                    icon={item.icon}
                    rarity={item.rarity}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemShop;
