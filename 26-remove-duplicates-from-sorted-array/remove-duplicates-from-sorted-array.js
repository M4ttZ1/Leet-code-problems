/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let uniqueItems = [...new Set(nums)]
  nums.length = 0;
  nums.push(...uniqueItems)
  return nums.length
};