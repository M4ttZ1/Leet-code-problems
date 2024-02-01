function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalProfit = 0;
    let currentProfit = 0;
    let startingStation = 0;

    for (let i = 0; i < gas.length; i++) {
        totalProfit += gas[i] - cost[i];
        currentProfit += gas[i] - cost[i];
        if (currentProfit < 0) {
            startingStation = i + 1;
            currentProfit = 0;
        }
    }
    return totalProfit >= 0 ? startingStation : -1;
};