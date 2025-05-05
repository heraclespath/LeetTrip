func numTilings(n int) int {
    mod := int(1e9 + 7)
    if n == 1 {
        return 1
    } else if n == 2 {
        return 2
    } else if n == 3 {
        return 5
    }

    dp := make([]int, n+1)
    dp[1], dp[2], dp[3] = 1, 2, 5

    for i := 4; i <= n; i++ {
        dp[i] = (2*dp[i-1]%mod + dp[i-3]) % mod
    }

    return dp[n]
}