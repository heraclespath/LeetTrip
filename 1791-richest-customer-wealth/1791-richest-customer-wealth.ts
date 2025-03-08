function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;
    for (let customer of accounts) {
        const wealth = customer.reduce((acc, bank) => acc + bank, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }
    return maxWealth;
};