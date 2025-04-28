class Solution:
    def myPow(self, x: float, n: int) -> float:
        def qpow(a: float, n: int) -> float:
            if n == 0:
                return 1
            
            half = qpow(a, n // 2)
            if n % 2 == 0:
                return half * half
            else:
                return half * half * a

        return qpow(x, n) if n >= 0 else 1 / qpow(x, -n)