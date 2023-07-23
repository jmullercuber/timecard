import { useEffect, useState } from "react";
import { useTimecardContext } from "../contexts/Timecard";
import { formatDuration } from "../utils/dateFormatter";

const calcDuration = (start: Date) => new Date().getTime() - start.getTime();

const Stopwatch = () => {
  const { currentBlockStart } = useTimecardContext();
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (currentBlockStart === null) {
      return;
    }

    const intervalId = setInterval(() => {
      const newTime = calcDuration(currentBlockStart);
      setTime(newTime);
    }, 100);

    return () => {
      clearInterval(intervalId);
      setTime(0);
    };
  }, [currentBlockStart]);

  return (
    <div>
      <span>{formatDuration(time)}</span>
    </div>
  );
};

export { Stopwatch };
