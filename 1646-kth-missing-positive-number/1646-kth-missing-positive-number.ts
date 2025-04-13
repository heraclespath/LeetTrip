function findKthPositive(arr: number[], k: number): number {
    if (arr[0] > k) {
        return k;
    }

    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = (left + right) >> 1;
        const missing = arr[mid] - mid - 1;

        if (missing >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1);
};