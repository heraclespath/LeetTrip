func permute(nums []int) [][]int {
    var res [][]int
    var path []int
    used := make([]bool, len(nums))

    var dfs func()
    dfs = func() {
        if len(path) == len(nums) {
            perm := make([]int, len(path))
            copy(perm, path)
            res = append(res, perm)
            return
        }

        for i := 0; i < len(nums); i++ {
            if used[i] {
                continue
            }
            used[i] = true
            path = append(path, nums[i])
            dfs()
            path = path[:len(path)-1]
            used[i] = false
        }
    }

    dfs()
    return res
}