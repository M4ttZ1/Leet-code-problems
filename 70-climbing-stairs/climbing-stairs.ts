function climbStairs(n: number): number {
    let pre = 1, ans = 1

    for (let i = 2; i <= n; i++) {
        const next = pre + ans
        pre = ans
        ans = next
    }

    return ans
};