function miniMaxSum(arr) {
    // Write your code here

    let max = 0;
    let min = 0;

    // To find Maximum
    let increasingArr = arr.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < increasingArr.length - 1; i++) {
        max += increasingArr[i];
    }
    // To find Minimum
    let decreasingArr = arr.sort((a, b) => {
        return b - a;
    });

    for (let i = 0; i < decreasingArr.length - 1; i++) {
        min += decreasingArr[i];
    }

    console.log(max, min);
}
