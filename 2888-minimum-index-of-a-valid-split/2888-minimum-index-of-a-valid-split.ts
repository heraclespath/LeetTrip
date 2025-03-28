function minimumIndex(nums: number[]): number {
    const n = nums.length;

    let countMap = new Map<number, number>();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let dominant = -1;
    for (const [key, count] of countMap.entries()) {
        if (count > n / 2) {
            dominant = key;
            break;
        }
    }

    let leftCount = 0;
    const totalCount = countMap.get(dominant)!;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dominant) {
            leftCount++;
        }
        const rightCount = totalCount - leftCount;

        if (leftCount > (i + 1) / 2 && rightCount > (n - i - 1) / 2) {
            return i;
        }
    }

    return -1;
}
