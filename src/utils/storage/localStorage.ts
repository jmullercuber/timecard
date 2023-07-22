import { TimecardState } from "../../contexts/Timecard";
import { TimeBlock } from "../../models/TimeBlock";
import { StorageBackend } from "./index";

const PROJ_NAME = "my-timecard";
const VERSION = 1;

const key = `${PROJ_NAME}-${VERSION}-state`;

// tbh, not sure if it is cleaner for the default to
// live with the storage code or the context code
const getDefaultTimecardState = (): TimecardState => ({
  currentBlockStart: null,
  history: [],
});

interface RawFormat {
  currentBlockStart: string;
  history: {
    startTime: string;
    endTime: string;
  }[];
}

const deserializeTimecardState = (data: string): TimecardState => {
  const raw: RawFormat = JSON.parse(data);

  return {
    currentBlockStart: raw.currentBlockStart
      ? new Date(raw.currentBlockStart)
      : null,
    history: raw.history.map(
      (x) => new TimeBlock(new Date(x.startTime), new Date(x.endTime))
    ),
  };
};

const TimecardLocalStorageBackend: StorageBackend<TimecardState> = {
  default: getDefaultTimecardState(),
  load: () => {
    const serialized = localStorage.getItem(key);

    const state = serialized
      ? deserializeTimecardState(serialized)
      : getDefaultTimecardState();

    return state;
  },

  dump: (state: TimecardState) => {
    localStorage.setItem(key, JSON.stringify(state));
  },
};

export { TimecardLocalStorageBackend };
