const testCases = [["flower","flow","flight"], ["dog","racecar","car"], [""], ["a"], ["flower","flower","flower","flower"], ["ab", "a"]];

const longestCommonPrefix = (strs) => {
    // console.log("demo".slice(0, 3));
    // console.log("demo".slice(0, 0));
    let common = "";
    for(let i = 1; i <= strs[0].length; i++) {
        common = strs[0].slice(0, i);
        for(const str of strs) {
            if(str.slice(0, i) !== common) {
                return common.slice(0, i - 1);
            }
        }
    }
    return common;
}

testCases.forEach(test => console.log(longestCommonPrefix(test)));