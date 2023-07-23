import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { TimeBlock } from "../models/TimeBlock";
import { TimecardLocalStorageBackend as TimecardStorage } from "../utils/storage";

interface TimecardState {
  currentBlockStart: Date | null;
  history: TimeBlock[];
}

interface TimecardOutputs extends TimecardState {
  isCounting: boolean;
  toggleCounting: () => void;
  clear: () => void;
  deleteAtIndex: (index: number) => void;
}

const TimecardContext = createContext<TimecardOutputs | undefined>(undefined);

// Require that this context have a non-default provider
const useTimecardContext = () => {
  const context = useContext(TimecardContext);

  if (!context) {
    throw new Error("No TimecardContext.Provider found");
  }

  return context;
};

const TimecardProvider = ({ children }: PropsWithChildren) => {
  // state: start with default values
  const [timecardState, setTimecardState] = useState(TimecardStorage.default);

  // value to keep track of whether we've finished initial load
  const [isBackendLoaded, setIsBackendLoaded] = useState(false);

  // later, load default from storage (which may be slower)
  useEffect(() => {
    // exit early if already completed initial load
    if (isBackendLoaded) return;

    const loadedState = TimecardStorage.load();
    setTimecardState(loadedState);
    setIsBackendLoaded(true);
  }, [isBackendLoaded]);

  // save state everytime it changes
  useEffect(() => {
    // but do not save if backend never loaded!
    // otherwise, we'd overwrite it with the default values
    if (!isBackendLoaded) return;

    TimecardStorage.dump(timecardState);
  }, [timecardState, isBackendLoaded]);

  /*
    next are functions to modify state
  */
  const startCounting = () => {
    setTimecardState({ ...timecardState, currentBlockStart: new Date() });
  };

  const stopCounting = () => {
    // Fail if clock hasn't started
    if (!timecardState.currentBlockStart) {
      throw new Error("Cannot stop counting when the clock hasn't started");
    }

    // add to history
    // clear start so we are ready for the next session
    const newBlock = new TimeBlock(timecardState.currentBlockStart, new Date());
    setTimecardState({
      history: [newBlock, ...timecardState.history],
      currentBlockStart: null,
    });
  };

  const toggleCounting = () => {
    const action = timecardState.currentBlockStart
      ? stopCounting
      : startCounting;
    action();
  };

  const clear = () => {
    setTimecardState(TimecardStorage.default);
  };

  const deleteAtIndex = (deleteIndex: number) => {
    setTimecardState({
      ...timecardState,
      history: timecardState.history.filter((_, idx) => idx !== deleteIndex),
    });
  };

  const value = {
    ...timecardState,
    isCounting: timecardState.currentBlockStart !== null,
    toggleCounting,
    clear,
    deleteAtIndex,
  };

  return (
    <TimecardContext.Provider value={value}>
      {children}
    </TimecardContext.Provider>
  );
};

export type { TimecardState };
export { useTimecardContext, TimecardProvider };
