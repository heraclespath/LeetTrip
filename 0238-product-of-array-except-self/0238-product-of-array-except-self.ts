function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = new Array(n).fill(1);

    // Left product pass
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Right product pass
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}