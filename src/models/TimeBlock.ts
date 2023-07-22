class TimeBlock {
  startTime: Date;
  endTime: Date;

  constructor(start: Date, end: Date) {
    this.startTime = start;
    this.endTime = end;
  }

  public get durationMilliSecs(): number {
    return this.endTime.getTime() - this.startTime.getTime();
  }
}

export { TimeBlock };
