function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap: Record<string, number> = {};

    for (const char of magazine) {
        if (magazineMap[char]) {
            magazineMap[char]++;
        } else {
            magazineMap[char] = 1;
        }
    }

    for (const char of ransomNote) {
        if (!magazineMap[char]) {
            return false;
        }
        magazineMap[char]--;
    }
    return true;
};