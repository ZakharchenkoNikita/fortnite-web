import { Shop, Entries } from "../types/Shop";
import { ShopItem } from "../types/Item";

const getItemData = (entry: Entries): ShopItem => {
  if (entry.bundle !== null) {
    return {
      id: entry.newDisplayAsset.id,
      name: entry.bundle.name,
      finalPrice: entry.finalPrice,
      icon: entry.bundle.image,
      rarity: entry.items.at(0)!.rarity.value,
      type: entry.items.at(0)!.type.value,
    };
  }

  return {
    id: entry.items.at(0)!.id,
    name: entry.items.at(0)!.name,
    finalPrice: entry.finalPrice,
    icon: entry.items.at(0)!.images.icon,
    rarity: entry.items.at(0)!.rarity.value,
    type: entry.items.at(0)!.type.value,
  };
};

const getArrayOfEntries = (shopEntries: Entries) => {
  const entries: ShopItem[] = [];

  Object.entries(shopEntries).forEach((entry) => {
    entries.push(entry.at(1));
  });

  return entries;
};

const getShopEntries = (entries: Entries[]) => {
  let shopEntries: any = {};

  for (const entry of entries) {
    if (shopEntries.hasOwnProperty(entry.sectionId)) {
      shopEntries[entry.sectionId].items.push(getItemData(entry));
    } else {
      shopEntries[entry.sectionId] = {
        name: entry.section !== null ? entry.section.name : entry.sectionId,
        items: [getItemData(entry)],
      };
    }
  }

  return getArrayOfEntries(shopEntries);
};

const joinShopEntries = (shop: Shop) => {
  const featuredEntries = getShopEntries(shop.featured.entries);
  const dailyEntries = getShopEntries(shop.daily.entries);
  const specialFeatured = getShopEntries(shop.specialFeatured.entries);

  return [...featuredEntries, ...dailyEntries, ...specialFeatured];
};

export default joinShopEntries;
