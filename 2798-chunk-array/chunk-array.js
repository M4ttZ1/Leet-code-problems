/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length === 0) return []
    let nArr = []

    for (let i = 0; i < arr.length; i += size) {
    nArr.push(arr.slice(i, i + size));
  }
    return nArr
    
};
