func maxSubarraySumCircular(nums []int) int {
    total, maxSum, curMax := nums[0], nums[0], nums[0]
    minSum, curMin := nums[0], nums[0]

    for i:= 1; i < len(nums); i++ {
        curMax = max(nums[i], curMax+nums[i])
        maxSum = max(maxSum, curMax)

        curMin = min(nums[i], curMin+nums[i])
        minSum = min(minSum, curMin)

        total += nums[i]
    }

    if maxSum < 0 {
        return maxSum
    }

    return max(maxSum, total - minSum)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}