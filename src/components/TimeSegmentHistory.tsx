import { useTimecardContext } from "../contexts/Timecard";
import { TimeBlock } from "../models/TimeBlock";
import { formatDate, formatDuration } from "../utils/dateFormatter";

const Segment = (block: TimeBlock, idx: number) => {
  const start = formatDate(block.startTime, { showSeconds: false });
  const end = formatDate(block.endTime, { showSeconds: false });
  const duration = formatDuration(block.durationMilliSecs);

  const { deleteAtIndex } = useTimecardContext();

  return (
    <div key={idx}>
      <span onClick={() => deleteAtIndex(idx)}>x </span>
      <span>
        {start}-{end};
      </span>
      <span>Duration: {duration};</span>
      <br />
    </div>
  );
};

const TimeSegmentHistory = () => {
  // context
  const timecard = useTimecardContext();

  const sum = timecard.history
    .map((block) => block.durationMilliSecs)
    .reduce((partial, next) => partial + next, 0);

  return (
    <div>
      <h1>Time Segments History</h1>
      <h2>Total Duration</h2>
      <span>{formatDuration(sum)}</span>
      <hr />
      <ul>{timecard.history.map(Segment)}</ul>
    </div>
  );
};

export { TimeSegmentHistory };
