import { useState, useEffect } from "react";

export default (handler, interval) => {
  const [intervalId, setIntervalId] = useState();
  useEffect(() => {
    // add some interval time.
    const id = setInterval(handler, interval);
    setIntervalId(id);
    // return clear interval
    return () => clearInterval(id);
  }, []);
  return () => clearInterval(intervalId);
};
