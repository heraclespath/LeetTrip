func successfulPairs(spells []int, potions []int, success int64) []int {
    sort.Ints(potions)
    res := make([]int, len(spells))

    for i, spell := range spells {
        left, right := 0, len(potions)
        for left < right {
            mid := left + (right-left)/2
            if int64(spell) * int64(potions[mid]) >= success {
                right = mid
            } else {
                left = mid + 1
            }
        }
        res[i] = len(potions) - left
    }

    return res
}