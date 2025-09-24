
const testCases = [121, -121, 10, 734437, 65456, 982736];

// TRY WITHOUT CONVERTING INTO STRING

const isPalindrome = (x) => {

    const theInput = x;
    let reverse = 0;
    if(x === 0) return true;

    while(x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === theInput;
}

testCases.forEach(isPalindrome);