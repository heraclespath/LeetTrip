from heapq import heappush, heappop
from typing import List

class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
        m, n = len(grid), len(grid[0])
        qs = sorted([(q, i) for i, q in enumerate(queries)])
        seen = [[False] * n for _ in range(m)]
        heap = []
        heappush(heap, (grid[0][0], 0, 0))
        seen[0][0] = True
        acc = 0
        ans = [0] * len(queries)
        DIRS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        for q, idx in qs:
            while heap and heap[0][0] < q:
                val, r, c = heappop(heap)
                acc += 1

                for dr, dc in DIRS:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and not seen[nr][nc]:
                        seen[nr][nc] = True
                        heappush(heap, (grid[nr][nc], nr, nc))

            ans[idx] = acc

        return ans
        