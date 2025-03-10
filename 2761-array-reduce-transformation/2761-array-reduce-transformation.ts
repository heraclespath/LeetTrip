type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accmulator = init;
    for (let i = 0; i < nums.length; i++) {
        accmulator = fn(accmulator, nums[i]);
    }
    return accmulator;
};