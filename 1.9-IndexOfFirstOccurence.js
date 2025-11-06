/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const findLps = () => {
        let len = 0;
        const lps = new Array(needle.length).fill(0);

        for(let i = 1; i < needle.length; i++) {
            if(needle[i] === needle[len]) {
                len++;
                lps[i] = len;
            } else {
                if(len !== 0) {
                    len = lps[len - 1];
                    i--;
                } else {
                    lps[i] = 0;
                }
            }
        }

        return lps;
    }

    console.log(findLps());
    const lps = findLps();
    let mp;
    let hp = 0;
    let np = 0;
    while(hp < haystack.length) {
        if(haystack[hp] === needle[np]) {
            hp++;
            np++;
            if(np === needle.length) {
                return hp - needle.length;
            }
        } else {
            if(np !== 0) {
                np = lps[np - 1];
            } else {
                hp++;
            }
        }
    }
    mp = -1;
    return mp;
};
