function arrangeCoins(n: number): number {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const k = mid;
        const curr = (k / 2) * (k + 1);

        if (curr === n) return k;
        if (curr < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};