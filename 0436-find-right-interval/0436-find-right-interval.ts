function findRightInterval(intervals: number[][]): number[] {
    const n: number = intervals.length;
    const starts: [number, number][] = intervals.map(([start], index) => [start, index]);
    starts.sort((a, b) => a[0] - b[0]);

    return intervals.map(([_, end]) => {
        let left = 0;
        let right = n;

        while (left < right) {
            const mid = (left + right) >> 1;
            if (starts[mid][0] >= end) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left < n ? starts[left][1] : -1;
    });
};