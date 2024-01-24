/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
let str = s.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
function checkPalindrom(str) {
return str == str.split('').reverse().join('')
}
return checkPalindrom(str.toLowerCase())
};