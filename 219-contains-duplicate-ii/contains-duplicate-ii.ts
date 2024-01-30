function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const s = new Set();

    for (let i = 0, l = nums.length; i < l; i++) {
        if(i > k) s.delete(nums[i - k - 1]);

        if (s.has(nums[i])) return true;

        s.add(nums[i]);
    }

    return false;
};