func numSubseq(nums []int, target int) int {
    sort.Ints(nums)
    mod := int(1e9 + 7)
    n := len(nums)

    pow := make([]int, n)
    pow[0] = 1
    for i:= 1; i < n; i++ {
        pow[i] = (pow[i-1] * 2) % mod
    }

    res := 0
    left, right := 0, n - 1

    for left <= right {
        if nums[left] + nums[right] <= target {
            res = (res + pow[right - left]) % mod
            left++
        } else {
            right--
        }
    }

    return res
}