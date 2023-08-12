export interface Item {
  id: string;
  name: string;
  description: string;
  images: Images;
  type: Type;
  rarity: Rarity;
  added: Added;
  series: Series;
  introduction: Introduction;
  battlepass: Battlepass;
  styles: Styles[];
  shopHistory: string[];
  gameplayTags: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  finalPrice: number;
  icon: string;
  rarity: string;
  type: string;
}

export interface Images {
  icon: string;
  featured: any;
  background: string;
  icon_background: string;
  full_background: string;
}

export interface Type {
  id: string;
  name: string;
  value: string;
}

export interface Rarity {
  id: string;
  value: string;
  name: string;
}

export interface Added {
  date: string;
  version: string;
}

export interface Series {
  value: string;
  image: string;
}

export interface Introduction {
  chapter: string;
  season: string;
  text: string;
}

export interface Battlepass {
  season: number;
  tier: number;
  type: string;
  displayText: DisplayText;
  battlePassName: string;
}

export interface Styles {
  name: string;
  image: string;
}

export interface DisplayText {
  chapter: string;
  season: string;
  chapterSeason: string;
}
