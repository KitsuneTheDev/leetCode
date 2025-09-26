const testCases=["III", "LVIII", "MCMXCIV", "MCDLXXVI"];

const romanToInt = (roman) => {
    const romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    let total = 0;

    for(let i = 0; i <= roman.length - 1; i += 1) {

        const currentRoman = romanMap.get(roman[i]);
        const nextRoman = romanMap.get(roman[i+1]) || 0;

        if(currentRoman >= nextRoman) {
            total += currentRoman;
        } else {
            total += (nextRoman - currentRoman);
            i++;
        }
    }
    return `total --> ${total}`;
}

testCases.forEach(test => console.log(romanToInt(test)));