/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let myMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if(i === 0) {
            myMap.set(s[i], i);
        } else {
            if(myMap.get(s[i]) !== undefined) {
                if(max < myMap.size) max = myMap.size;
            } else {
                myMap.set(s[i], i);
            }
        }
    }
    return max;
};
