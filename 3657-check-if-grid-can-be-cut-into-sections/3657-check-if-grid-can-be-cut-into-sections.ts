function checkValidCuts(n: number, rectangles: number[][]): boolean {
    const xs: number[][] = rectangles.map(([startX, , endX]) => [startX, endX]);
    const ys: number[][] = rectangles.map(([, startY, , endY]) => [startY, endY]);
  
    return countMergedIntervals(xs) >= 3 || countMergedIntervals(ys) >= 3;
}
  
function countMergedIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let prevEnd = 0;
  
    for (const [start, end] of intervals) {
      if (start < prevEnd) {
        prevEnd = Math.max(prevEnd, end);
      } else {
        prevEnd = end;
        count++;
      }
    }
    return count;
}