import { useState, useEffect } from "react";

const LoadingAnimation = ({ text, speed, dots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState(text);

  useEffect(() => {
    let typingTimer;
    if (currentIndex < dots - 1) {
      typingTimer = setTimeout(() => {
        setTypedText((prevText) => prevText + ".");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    } else {
      typingTimer = setTimeout(() => {
        setTypedText(text);
        setCurrentIndex(0);
      }, speed);
    }
    return () => clearTimeout(typingTimer);
  }, [currentIndex, speed]);

  return <span>{typedText}</span>;
};

export default LoadingAnimation;
