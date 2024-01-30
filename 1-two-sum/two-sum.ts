function twoSum(nums: number[], target: number): number[] {
    let x = 0
    let i = 1
    while( nums[x] + nums[i] !== target ){
        if( i== nums.length ) {
            x++
            i=x   
        }
        i++    
    }
    return [x,i] 
};