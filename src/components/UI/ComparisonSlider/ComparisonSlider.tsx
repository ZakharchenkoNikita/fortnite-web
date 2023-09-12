import { FC, useState, useRef, useEffect, useCallback } from "react";
import styles from "./ComparisonSlider.module.css";
import ArrowRightLeft from "../../../assets/svg/ArrowRightLeft";
import Image from "../../../types/Image";

interface ComparisonSliderProps {
  topImage?: Image;
  bottomImage?: Image;
}

const ComparisonSlider: FC<ComparisonSliderProps> = ({
  topImage,
  bottomImage,
}) => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const topImageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const setPositioning = useCallback((xPosition: number) => {
    if (!topImageRef.current || !handleRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    if (xPosition >= left && xPosition <= width + left - handleWidth) {
      handleRef.current.style.left = `${((xPosition - left) / width) * 100}%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - ((xPosition - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  useEffect(() => {
    if (!topImageRef.current || !handleRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    console.log(handleWidth, left, width);

    const timer = setTimeout(() => {
      setPositioning(width / 2 + left - handleWidth / 2);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [setPositioning]);

  const handleResize = useCallback(
    (e: MouseEvent) => {
      setPositioning(e.clientX);
    },
    [setPositioning]
  );

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", handleResizeEnd);
  }, [handleResize]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <div className={styles["comparison-slider"]}>
      <div
        ref={handleRef}
        className={styles.handle}
        onMouseDown={() => setIsResizing(true)}
      >
        <ArrowRightLeft className={styles.svg} />
      </div>

      <div
        ref={topImageRef}
        className={`${styles["comparison-item"]} ${styles.top}`}
      >
        <img draggable={false} src={topImage?.src} alt={topImage?.alt} />
      </div>

      <div className={styles["comparison-item"]}>
        <img draggable={false} src={bottomImage?.src} alt={bottomImage?.alt} />
      </div>
    </div>
  );
};

export default ComparisonSlider;
