import { useTimecardContext } from "../contexts/Timecard";

function ToggleButton() {
  const timecard = useTimecardContext();
  const statusText = timecard.isCounting ? "STOP" : "START";

  return <div onClick={timecard.toggleCounting}>{statusText}</div>;
}

export { ToggleButton };
