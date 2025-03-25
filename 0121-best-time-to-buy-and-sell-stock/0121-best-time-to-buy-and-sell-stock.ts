function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
