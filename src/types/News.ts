export interface News {
  id: string;
  title: string;
  tabTitle: string;
  body: string;
  image: string;
  tileImage: string;
  sortingPriority: number;
}

export interface NewsData {
  br: {
    motds: News[];
  };
}
