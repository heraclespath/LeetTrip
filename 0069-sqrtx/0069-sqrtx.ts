function mySqrt(x: number): number {
    let [l, r]: [number, number] = [0, x];
    while (l < r) {
        const mid: number = (l + r + 1) >> 1;
        if (mid > x / mid) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }
    return l;
};