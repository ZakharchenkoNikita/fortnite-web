import { Item } from "./Item";

export interface Shop {
  date: string;
  vbuckIcon: string;
  featured: ShopTypeData;
  daily: ShopTypeData;
  specialFeatured: ShopTypeData;
}

export interface ShopTypeData {
  name: string;
  entries: Entries[];
}

export interface Entries {
  regularPrice: number;
  finalPrice: number;
  bundle: {
    name: string;
    info: string;
    image: string;
  };
  banner: {
    value: string;
    intensity: string;
    backendValue: string;
  };
  giftable: boolean;
  refundable: boolean;
  sortPriority: number;
  sectionId: string;
  section: Section;
  newDisplayAsset: NewDisplayAsset;
  items: Item[];
}

interface Section {
  id: string;
  name: string;
  index: number;
  showTime: boolean;
}

interface NewDisplayAsset {
  id: string;
  cosmeticId: string;
  materialInstances: [
    {
      id: string;
      images: {
        OfferImage: string;
        Background: string;
      };
      colors: {
        Background_Color_A: string;
        Background_Color_B: string;
        FallOff_Color: string;
      };
    }
  ];
}
