const testCases = ["abca", "abcdef", "aabbcc", "abcbac"];

const firstRepetition = (s) => {
    const mySet = new Set();
    for(let i = 0; i < s.length; i++) {
        if(mySet.size === mySet.add(s[i]).size) return s[i];
    }
    return null;
}

testCases.forEach(test => console.log(firstRepetition(test)));