class TimeLimitedCache {
    private cache: Map<number, { value: number, expiry: number }>;

    constructor() {
        this.cache = new Map();    
    }
    
    set(key: number, value: number, duration: number): boolean {
        const currentTime = Date.now();
        const expiryTime = currentTime + duration;
        const exists = this.cache.has(key) && this.cache.get(key)!.expiry > currentTime;
        this.cache.set(key, { value, expiry: expiryTime });
        return exists;
    }
    
    get(key: number): number {
        const currentTime = Date.now();
        if (this.cache.has(key) && this.cache.get(key)!.expiry > currentTime) {
            return this.cache.get(key)!.value;
        }
        return -1;
    }
    
    count(): number {
        const currentTime = Date.now();
        let count = 0;
        for (const[key, { expiry }] of this.cache) {
            if (expiry > currentTime) {
                count++;
            }
        }
        return count;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */