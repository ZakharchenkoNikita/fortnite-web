const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const convertToDate = (date: Date): string => {
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

const getDayAgo = (date: Date) => {
  const daySeconds = 86400;

  const interval = Math.floor((Date.now() - date.getTime()) / 1000);

  if (interval < daySeconds) {
    return "Today";
  }
  if (interval < daySeconds * 2) {
    return "Yesterday";
  } else {
    return `${Math.floor(interval / daySeconds)} days ago`;
  }
};

export const getFirstRelease = (added: string) => {
  const date = new Date(added);
  const milliseconds = date.getTime();
  const addedDate = new Date(milliseconds);

  return convertToDate(addedDate);
};

export const getItemOccurrences = (shopHistory: string[]): string => {
  if (shopHistory !== null) {
    return shopHistory.length.toString();
  }

  return "";
};

export const getLastSeen = (shopHistory: string[]): string => {
  if (shopHistory !== null) {
    const lastSeen = shopHistory.at(-1)!.toString();
    const date = new Date(lastSeen);

    return getDayAgo(date);
  }

  return "";
};

export interface Testst {
  date: string;
  days: string;
}

export const getItemHistory = (shopHistory: string[]) => {
  if (shopHistory !== null) {
    let newShopHistory: Testst[];

    newShopHistory = shopHistory.map((date) => {
      const historyDate = new Date(date);

      return {
        date: convertToDate(historyDate),
        days: getDayAgo(historyDate),
      };
    });

    return newShopHistory;
  }

  return [{ date: "", days: "" }];
};
