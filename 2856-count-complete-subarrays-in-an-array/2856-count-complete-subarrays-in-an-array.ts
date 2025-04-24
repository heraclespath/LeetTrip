function countCompleteSubarrays(nums: number[]): number {
    const totalDistinct = new Set(nums).size;

    let count = 0;
    const n = nums.length;

    for (let start = 0; start < n; start++) {
        const currentDistinct = new Set();

        for (let end = start; end < n; end++) {
            currentDistinct.add(nums[end]);

            if (currentDistinct.size === totalDistinct) {
                count++;
            }
        }
    }
    return count;
};