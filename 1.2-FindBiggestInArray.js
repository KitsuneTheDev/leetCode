const testCases = [[5, 1, 7, 3, 9], [42], [-5, -1, -7, -3, -9], [-10, 0, 5, -3, 8], [2, 2, 2, 2, 2]];

const findBiggest = (arr) => {
    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++){
        if(currentMax < arr[i]) currentMax = arr[i];
    }

    return currentMax;
}

testCases.forEach((test) => console.log(findBiggest(test)));