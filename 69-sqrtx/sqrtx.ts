function mySqrt(x: number): number {
    // as per the constrain x lies from 0 - 2^31-1
    let low = 0;

    // to calculate square root of number means
    // we need to find the square of that function
    // meaning if 4 is the target then 2 will be it's
    // input as 2 x 2 == 4
    // meaning the square will always be smaller than
    // the squareroot i.e 4 > 2
    // so high pointer will be the number itself as
    // the higher we go the further away we go from
    // the square of the that target
    let high = x;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        const square = mid * mid;


        if (square <= x) low = mid + 1;

        else high = mid - 1;
    }


    return high;
};