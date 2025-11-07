/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let last = digits.length - 1;
    let flag = true;
    while(flag) {
        if(last === -1) {
            return [1, ...digits];
        } else {
            if(digits[last] + 1 === 10) {
                digits[last] = 0;
                last--;
            } else {
                digits[last] += 1;
                flag = false;
            }
        }
    }

    return digits;
};
