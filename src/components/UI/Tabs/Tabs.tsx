import { FC, ReactElement, useState } from "react";
import styles from "./Tabs.module.css";
import TabTitle from "./TabTitle";

interface TabsProps {
  children: ReactElement[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.container}>
      {children[selectedTab]}
      <div className={styles.tabs}>
        {children.map((item, index) => {
          return (
            <TabTitle
              key={index}
              imageSrc={item.props.imageSrc}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
