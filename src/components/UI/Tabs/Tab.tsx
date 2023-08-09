import { FC } from "react";

interface TabProps {
  children: any;
  imageSrc: string;
  title: string;
}

const Tab: FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
