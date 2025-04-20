# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer} k
# @return {Integer}
def kth_smallest(root, k)
    @k = k
    @result = nil
    dfs(root)
    @result
end

private

def dfs(node)
    return if node.nil?

    dfs(node.left)

    @k -= 1
    if @k == 0
        @result = node.val
        return
    end

    dfs(node.right)
end