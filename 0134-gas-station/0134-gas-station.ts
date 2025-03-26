function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let totalTank = 0;
    let currentTank = 0;
    let startStation = 0;

    for (let i = 0; i < n; i++) {
        const netGain = gas[i] - cost[i];
        totalTank += netGain;
        currentTank += netGain;

        if (currentTank < 0) {
            startStation = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= 0 ? startStation : -1;
}