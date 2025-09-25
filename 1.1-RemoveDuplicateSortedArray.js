
const testCases = [[1,1,2], [0,0,0,1,1,1,2,2,3,3,4]];


const removeDuplicateSortedArray = (nums) => {
    let currentPointer = 0;

    for(let iterator = 1; iterator < nums.length; iterator++) {
        if(nums[iterator] !== nums[iterator - 1]) {
            nums[lastPointer] = nums[firstPointer];
        } 
    };

    console.log(nums.length, nums);
    // return nums.length;
}

testCases.forEach(removeDuplicateSortedArray);