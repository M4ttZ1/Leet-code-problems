/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let res = 0;
    for(let right = 1; right < prices.length; right++) {
        if(prices[left] < prices[right]){ 
            res = Math.max(res, prices[right] - prices[left]);
        }
        else left = right;
    }
    return res;
};