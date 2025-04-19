/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
    const depth = (node: TreeNode | null): number => {
        let d = 0;
        while (node !== null) {
            d++;
            node = node.left;
        }
        return d;
    };

    if (root === null) return 0;

    const leftDepth = depth(root.left);
    const rightDepth = depth(root.right);

    if (leftDepth === rightDepth) {
        return (1 << leftDepth) + countNodes(root.right);
    } else {
        return (1 << rightDepth) + countNodes(root.left);
    }
};