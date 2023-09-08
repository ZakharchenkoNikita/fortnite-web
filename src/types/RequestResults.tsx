import { Item } from "./Item";
import { Shop } from "./Shop";
import { NewsData } from "./News";

export interface CosmeticDetailsResult {
  result: boolean;
  item: Item;
}

export interface LatestCosmeticsResult {
  result: boolean;
  items: Item[];
}

export interface ShopResult {
  data: Shop;
}

export interface NewsResult {
  data: NewsData;
}
