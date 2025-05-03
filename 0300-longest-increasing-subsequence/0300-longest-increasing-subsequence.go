func lengthOfLIS(nums []int) int {
    sub := []int{}

    for _, x := range nums {
        i := sort.SearchInts(sub, x)
        if i == len(sub) {
            sub = append(sub, x)
        } else {
            sub[i] = x
        }
    }

    return len(sub)
}