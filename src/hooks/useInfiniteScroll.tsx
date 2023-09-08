import { useState } from "react";

const useInfiniteScroll = (itemsPerPage: number) => {
  const [nextPage, setNextPage] = useState(itemsPerPage);

  const pageHandler = () => {
    const isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      setNextPage(nextPage + itemsPerPage);
    }
  };

  return {
    nextPage,
    pageHandler,
  };
};

export default useInfiniteScroll;
