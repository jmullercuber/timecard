import { hoursToPeriods } from "../dateFormatter";

test.each([
  { rawHour: 0, expected_hour: 12, expected_period: "am" },
  { rawHour: 1, expected_hour: 1, expected_period: "am" },
  { rawHour: 2, expected_hour: 2, expected_period: "am" },
  { rawHour: 3, expected_hour: 3, expected_period: "am" },
  { rawHour: 4, expected_hour: 4, expected_period: "am" },
  { rawHour: 5, expected_hour: 5, expected_period: "am" },
  { rawHour: 6, expected_hour: 6, expected_period: "am" },
  { rawHour: 7, expected_hour: 7, expected_period: "am" },
  { rawHour: 8, expected_hour: 8, expected_period: "am" },
  { rawHour: 9, expected_hour: 9, expected_period: "am" },
  { rawHour: 10, expected_hour: 10, expected_period: "am" },
  { rawHour: 11, expected_hour: 11, expected_period: "am" },

  { rawHour: 12, expected_hour: 12, expected_period: "pm" },
  { rawHour: 13, expected_hour: 1, expected_period: "pm" },
  { rawHour: 14, expected_hour: 2, expected_period: "pm" },
  { rawHour: 15, expected_hour: 3, expected_period: "pm" },
  { rawHour: 16, expected_hour: 4, expected_period: "pm" },
  { rawHour: 17, expected_hour: 5, expected_period: "pm" },
  { rawHour: 18, expected_hour: 6, expected_period: "pm" },
  { rawHour: 19, expected_hour: 7, expected_period: "pm" },
  { rawHour: 20, expected_hour: 8, expected_period: "pm" },
  { rawHour: 21, expected_hour: 9, expected_period: "pm" },
  { rawHour: 22, expected_hour: 10, expected_period: "pm" },
  { rawHour: 23, expected_hour: 11, expected_period: "pm" },
])(
  "hoursToPeriods($rawHour) returns expected hour values $expected_hour $expected_period",
  ({ rawHour, expected_hour, expected_period }) => {
    expect(hoursToPeriods(rawHour)).toMatchObject({
      hours: expected_hour,
      period: expected_period,
    });
  }
);
