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
}
