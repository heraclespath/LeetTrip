/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) int {
    prefixSums := map[int]int{0: 1}
    var dfs func(*TreeNode, int) int

    dfs = func(node *TreeNode, currSum int) int {
        if node == nil {
            return 0
        }

        currSum += node.Val
        count := prefixSums[currSum-targetSum]

        prefixSums[currSum]++
        count += dfs(node.Left, currSum)
        count += dfs(node.Right, currSum)
        prefixSums[currSum]--

        return count
    }

    return dfs(root, 0)
}