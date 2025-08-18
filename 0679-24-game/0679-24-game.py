class Solution:
    def judgePoint24(self, cards: List[int]) -> bool:
        TARGET = 24.0
        EPS = 1e-9

        def dfs(nums: List[float]) -> bool:
            if len(nums) == 1:
                return isclose(nums[0], TARGET, rel_tol=0.0, abs_tol=EPS)

            n = len(nums)
            for i in range(n):
                for j in range(i + 1, n):
                    a, b = nums[i], nums[j]

                    results = [
                        a + b,
                        a - b,
                        b - a,
                        a * b,
                    ]

                    if abs(b) > EPS:
                        results.append(a / b)
                    if abs(a) > EPS:
                        results.append(b / a)

                    next_nums_base = [nums[k] for k in range(n) if k != i and k != j]
                    for val in results:
                        next_nums = next_nums_base + [val]
                        if dfs(next_nums):
                            return True
            return False
        
        return dfs([float(x) for x in cards])