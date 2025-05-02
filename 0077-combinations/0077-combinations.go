func combine(n int, k int) [][]int {
    var result [][]int
    var path []int

    var dfs func(start int)
    dfs =  func(start int) {
        if len(path) == k {
            combo := make([]int, k)
            copy(combo, path)
            result = append(result, combo)
            return
        }

        for i := start; i <= n; i++ {
            path = append(path, i)
            dfs(i + 1)
            path = path[:len(path)-1]
        }
    }

    dfs(1)
    return result
}