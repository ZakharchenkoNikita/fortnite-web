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
    id: string;
    value: string;
  };
  rarity: {
    value: string;
    id: string;
    displayValue: string;
  };
  added: {
    date: string;
  };
  series: {
    value: string;
    image: string;
  };
  introduction: {
    chapter: string;
    season: string;
    text: string;
  };
  styles: [
    {
      name: string;
      image: string;
    }
  ];
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
