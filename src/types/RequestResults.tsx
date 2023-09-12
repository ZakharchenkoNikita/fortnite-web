import { Item } from "./Item";
import { Shop } from "./Shop";
import { NewsData } from "./News";
import { Map } from "./Map";

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

export interface MapResult {
  result: boolean;
  maps: Map[];
}
