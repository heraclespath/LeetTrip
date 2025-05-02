func combinationSum(candidates []int, target int) [][]int {
    var res[][]int
    var path []int

    var dfs func(start, sum int)
    dfs = func(start, sum int) {
        if sum == target {
            comb := make([]int, len(path))
            copy(comb, path)
            res = append(res, comb)
            return
        }
        if sum > target {
            return
        }

        for i:= start; i < len(candidates); i++ {
            path = append(path, candidates[i])
            dfs(i, sum + candidates[i])
            path = path[:len(path)-1]
        }
    }

    dfs(0, 0)
    return res
}