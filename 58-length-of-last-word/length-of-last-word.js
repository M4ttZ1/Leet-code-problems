/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split = s.trim().split(" ")
    let lastId = split.length - 1
    return split[lastId].length
};