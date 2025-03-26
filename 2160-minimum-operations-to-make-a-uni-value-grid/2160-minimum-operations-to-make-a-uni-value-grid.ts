function minOperations(grid: number[][], x: number): number {
    const nums: number[] = [];

    const mod = grid[0][0] % x;

    for (const row of grid) {
        for (const v of row) {
            if (v % x !== mod) {
                return -1;
            }
            nums.push(v);
        }
    }

    nums.sort((a, b) => a - b);

    const mid = nums[Math.floor(nums.length / 2)];

    let operations = 0;
    for (const v of nums) {
        operations += Math.abs(v - mid) / x;
    }

    return operations;
}
