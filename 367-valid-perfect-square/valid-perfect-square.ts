

function isPerfectSquare(num: number) {
    function squareNum(mid: number) {
        return mid * mid;
    }
    let low = 1;
    let high = num;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const sqrt = squareNum(mid);
        if (sqrt === num) {
            return true;
        } else if (sqrt > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}