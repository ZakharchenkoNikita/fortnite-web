import { useState, useRef, useEffect } from "react";

const useClickOutside = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const hookRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!hookRef.current) return;
      if (!hookRef.current.contains(event.target as Node)) {
        setOpened(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [opened, setOpened]);

  return {
    opened,
    setOpened,
    hookRef,
  };
};

export default useClickOutside;
