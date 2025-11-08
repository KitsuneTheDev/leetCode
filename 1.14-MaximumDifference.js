/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = Math.abs(nums[0] - nums[nums.length - 1]);
    for(let i = 1; i < nums.length; i++) {
        const current = Math.abs(nums[i] - nums[i - 1])
        if(current > max) {
            max = current;
        }
    }
    return max;
};
