import { useState, useEffect, forwardRef } from "react";

export default forwardRef((wordsPerMin, ref) => {
  const [readingTime, setReadingTime] = useState(1);
  const [wordsCount, setWordsCount] = useState(1);

  useEffect(() => {
    const elem = ref.current;
    const words = elem.innerText.match(/\w+/g).length;
    const readingTimeCalc = Math.ceil(words / wordsPerMin);
    setReadingTime(readingTimeCalc);
    setWordsCount(words);
  }, [ref]);

  return { readingTime, wordsCount };
});
