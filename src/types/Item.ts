export interface Item {
  id: string;
  name: string;
  description: string;
  images: {
    icon: string;
    smallIcon: string;
    featured: string;
  };
  type: {
    displayValue: string;
    value: string;
  };
  rarity: {
    value: string;
    displayValue: string;
  };
  added: string;
  series: {
    value: string;
    image: string;
  };
  introduction: {
    chapter: string;
    season: string;
    text: string;
  };
  variants: {
    channel: string;
    type: string;
    options: [
      {
        tag: string;
        name: string;
        image: string;
      }
    ];
  };
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