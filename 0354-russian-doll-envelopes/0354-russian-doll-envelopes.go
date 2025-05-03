func maxEnvelopes(envelopes [][]int) int {
    sort.Slice(envelopes, func(i, j int) bool {
        if envelopes[i][0] == envelopes[j][0] {
            return envelopes[i][1] > envelopes[j][1]
        }
        return envelopes[i][0] < envelopes[j][0]
    })

    heights := []int{}
    for _, e := range envelopes {
        heights = append(heights, e[1])
    }

    return lengthOFLIS(heights)
}

func lengthOFLIS(nums []int) int {
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