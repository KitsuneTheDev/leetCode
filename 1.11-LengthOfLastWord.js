/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flagUp = false;
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(flagUp) {
            if(s[i] !== ' ') {
                count++;
            } else {
                flagUp = false;
                return count;
            }
        } else {
            if(s[i] !== ' ') {
                count++;
                flagUp = true;
            }
        }
    }

    return count;
};
