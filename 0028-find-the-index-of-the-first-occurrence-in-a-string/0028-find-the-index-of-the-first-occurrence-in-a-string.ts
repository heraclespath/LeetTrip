function strStr(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;

  if (m === 0) return 0; // Edge case: empty needle

  for (let i = 0; i <= n - m; i++) {
    if (haystack.slice(i, i + m) === needle) {
      return i;
    }
  }

  return -1;
}
