/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(N) {
    let len = N.length - 1 
    let curr = -1 
    let next = 0 
    let ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
};