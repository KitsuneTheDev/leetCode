/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let wP = 0;

    for(let rP = 0; rP < nums.length; rP++) {
        if(nums[rP] !== val) {
            nums[wP] = nums[rP];
            wP++;
        }
    }

    return wP;
};
