import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, typingSpeed }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingTimer;

    if (currentIndex < text.length) {
      typingTimer = setTimeout(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimer);
  }, [currentIndex, text, typingSpeed]);

  return <span>{typedText}</span>;
};

export default TypingAnimation;
