/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans = 0;
    let high = x;
    let mid;
    let low = 1;
    while(low <= high) {
        mid = Math.floor(low + (high - low) / 2);

        if(mid * mid === x) return mid;

        if(mid * mid < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};
