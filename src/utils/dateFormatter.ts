const isSameLocalDay = (a: Date, b: Date) => {
  const localYearA = a.getFullYear();
  const localMonthA = a.getMonth();
  const localDayA = a.getDate();

  const localYearB = b.getFullYear();
  const localMonthB = b.getMonth();
  const localDayB = b.getDate();

  return (
    localYearA === localYearB &&
    localMonthA === localMonthB &&
    localDayA === localDayB
  );
};

const padZeros = (num: number) => num.toString().padStart(2, "0");

// satisfy my american-self
const hoursToPeriods = (rawHours: number) => {
  const period = rawHours < 12 ? "am" : "pm";
  const hours = ((rawHours + 11) % 12) + 1;

  return { hours, period };
};

interface formatTimeOptions {
  showSeconds?: boolean;
}
const formatTime = (value: Date, { showSeconds }: formatTimeOptions = {}) => {
  const rawHours = value.getHours();
  const mins = padZeros(value.getMinutes());
  const secs = padZeros(value.getSeconds());

  // if international, could do something different here
  // but i will just do one thing
  const { hours: hours12, period } = hoursToPeriods(rawHours);

  const hours = padZeros(hours12);

  let result = `${hours}:${mins}`;
  if (showSeconds || showSeconds === undefined) result += `:${secs}`;
  result += ` ${period}`;

  return result;
};

const formatDuration = (ms: number) => {
  const value = new Date(ms);

  const hours = padZeros(value.getUTCHours());
  const mins = padZeros(value.getUTCMinutes());
  const secs = padZeros(value.getUTCSeconds());

  return `${hours}:${mins}:${secs}`;
};

interface formatDateOptions extends formatTimeOptions {}
const formatDate = (value: Date, options: formatDateOptions = {}) => {
  const now = new Date();

  const timeStr = formatTime(value, options);

  // If value is today, only show time
  if (isSameLocalDay(value, now)) {
    return timeStr;
  }

  // Otherwise, include date in output too
  const dateStr = `${value.getMonth()}/${value.getDate()}`;
  return `${dateStr} ${timeStr}`;
};

export { hoursToPeriods, formatDate, formatDuration };
