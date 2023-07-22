// allow different storage implementations
import { TimecardLocalStorageBackend } from "./localStorage";

interface StorageBackend<V> {
  default: V;
  load: () => V;
  dump: (state: V) => void;
}

export type { StorageBackend };

export { TimecardLocalStorageBackend };
