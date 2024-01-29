/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, i=0, index=nums.length-1) {
    if(index <= 0) return nums[0] >= i
    return canJump(nums, nums[index] >= i ? 1 : i+1, index-1)
};