class RandomizedSet {
    private map: Map<number, number>; // val -> index in array
    private arr: number[];

    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;

        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;

        const idx = this.map.get(val)!;
        const lastVal = this.arr[this.arr.length - 1];

        // Swap with last element and pop
        this.arr[idx] = lastVal;
        this.map.set(lastVal, idx);

        this.arr.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */