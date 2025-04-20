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
# @return {Integer}
  def get_minimum_difference(root)
    @pre = nil
    @min_diff = Float::INFINITY

    dfs(root)
    @min_diff
  end

  private

  def dfs(node)
    return if node.nil?

    dfs(node.left)

    if @pre
      @min_diff = [@min_diff, (node.val - @pre)].min
    end
    @pre = node.val

    dfs(node.right)
  end