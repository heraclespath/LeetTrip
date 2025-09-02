function reverse(x: number): number {
    const s = x < 0 ? -1 : 1
    let n = Math.abs(x), rev = 0

    while (n) {
        rev = rev * 10 + (n % 10)
        n = Math.trunc(n / 10)
    }

    rev *= s
    return rev < -(2 ** 31) || rev > 2 ** 31 - 1 ? 0 : rev
};