function searchRange(nums: number[], target: number): number[] {
    const lowerBound = (x: number): number => {
        let left = 0;
        let right = nums.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (nums[mid] >= x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    const left = lowerBound(target);
    const right = lowerBound(target + 1) - 1;

    if (left <= right && nums[left] === target) {
        return [left, right];
    }
    return [-1, -1];
}
