class TimeMap {
    private store: Map<string, Array<[number, string]>>;

    constructor() {
        this.store = new Map();    
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key)!.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        if (!this.store.has(key)) return "";

        const entries = this.store.get(key)!;

        let left = 0;
        let right = entries.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [midTime, midValue] = entries[mid];

            if (midTime === timestamp) {
                return midValue;
            } else if (midTime < timestamp) {
                result = midValue;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
