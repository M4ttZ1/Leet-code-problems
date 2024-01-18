/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const item = [];
    arr.forEach((val, index)=>{
        item.push(fn(val, index));
    });
    return item;
};