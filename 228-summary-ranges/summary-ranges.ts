function summaryRanges(nums: number[]): string[] {
    const getRange = (a: number, b: number): string => {
        if (a === b) return String(a);
        return a + '->' + b;
    }

    let currRangeStart: number = nums[0]
    const res = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1] || i === nums.length - 1) {
            res.push(getRange(currRangeStart, nums[i]))
            currRangeStart = nums[i + 1]
        }
    }

    return res

};