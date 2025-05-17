/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
    maxDiameter := 0
    
    var depth func(node *TreeNode) int
    depth = func(node *TreeNode) int {
        if node == nil {
            return 0
        }
        left := depth(node.Left)
        right := depth(node.Right)

        if left+right > maxDiameter {
            maxDiameter = left + right
        }

        return 1 + max(left, right)
    }

    depth(root)
    return maxDiameter
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}