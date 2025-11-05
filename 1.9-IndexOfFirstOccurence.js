/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    const findNeedlePrefix = () => {
        const lps = new Array(needle.length).fill(0);
        len = 0;

        for(let i = 1; i < needle.length; i++) {
            if(needle[i] === needle[len]) {
                len++;
                lps[i] = len;
            } else {
                if(len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                }
            }
        }

        return lps;
    }    

    const lps = findNeedlePrefix();
    console.log(lps);
    let nP = 0;
    for(let hP = 0; hP <= haystack.length; hP++) {
        if(nP === needle.length) {
            return hP - nP;
        } else {
            if(haystack[hP] === needle[nP]) {
                nP++;
            } else {
                if(nP !== 0) {
                    nP = lps[nP - 1];
                }
            }
        }
    }
    return -1;
};
