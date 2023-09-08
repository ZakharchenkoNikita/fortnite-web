import { FC } from "react";

import Tabs from "../UI/Tabs/Tabs";
import Tab from "../UI/Tabs/Tab";

import { News } from "../../types/News";
import NewsTab from "./NewsTab";

interface InGameNewsProps {
  news: News[];
}

const InGameNews: FC<InGameNewsProps> = ({ news }) => {
  return (
    <Tabs>
      {news
        .filter((item, _) => item.sortingPriority < 100)
        .map((item) => {
          return (
            <Tab key={item.id} imageSrc={item.tileImage} title={item.title}>
              <NewsTab
                title={item.title}
                tabTitle={item.tabTitle}
                body={item.body}
                imgSrc={item.image}
              />
            </Tab>
          );
        })}
    </Tabs>
  );
};

export default InGameNews;
