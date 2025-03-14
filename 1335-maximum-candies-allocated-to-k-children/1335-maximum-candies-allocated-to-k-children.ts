function maximumCandies(candies: number[], k: number): number {
    const canAllocate = (mid: number): boolean => {
        let count = 0;
        for (const candy of candies) {
            count += Math.floor(candy / mid);
            if (count >= k) return true;
        }
        return false;
    };

    let left = 0;
    let right = Math.max(...candies);
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canAllocate(mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};

