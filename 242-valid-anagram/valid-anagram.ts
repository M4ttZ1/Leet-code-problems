function isAnagram(s: string, t: string): boolean {
    function sort(str: string): string{
        return str.toLowerCase().split("").sort().join()
    }
    return sort(s) === sort(t)
};