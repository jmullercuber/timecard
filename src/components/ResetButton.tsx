import { useTimecardContext } from "../contexts/Timecard";

function ResetButton() {
  const timecard = useTimecardContext();

  return <div onClick={timecard.clear}>RESET</div>;
}

export { ResetButton };
