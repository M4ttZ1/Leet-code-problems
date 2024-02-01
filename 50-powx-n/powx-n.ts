function myPow(x: number, n: number): number {
     if (n < 0) {
        x = 1/x;
        n *= -1;
    }
    if (n === 0) return 1;

    let y: number = 1;
    while (n > 1) {
        if (n%2 === 0) {
            x *= x;
            n /= 2;
        } else {
            y *= x;
            x *= x;
            n = (n - 1) / 2;
        }
    }
    return x * y;
}