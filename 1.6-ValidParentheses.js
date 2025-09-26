const testCases = ["()", "()[]{}", "(]", "([])", "([)]"];

const validParentheses = (s) => {

    const parrMap = new Map();
    parrMap.set(')', '(');
    parrMap.set(']', '[');
    parrMap.set('}', '{');
    let parr = [];

    for(let i = 0; i < s.length; i++) {
        if("([{".includes(s[i])) {
            parr.push(s[i]);
        } else if(parr.pop() !== parrMap.get(s[i])) {
            return false;
        }
    }
    return parr.length === 0;
}

testCases.forEach(test => console.log(validParentheses(test)));