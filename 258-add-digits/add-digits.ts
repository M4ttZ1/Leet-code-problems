function addDigits(num: number): number {
    return num < 10 ? num : addDigits(num.toString().split('').reduce((acc, item) => acc += Number(item), 0));
};