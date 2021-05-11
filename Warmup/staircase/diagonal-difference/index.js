function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
    }
    // This changes original array. That's why I used 2 different for
    let reversedarr = arr.map((row) => row.reverse());

    for (let i = 0; i < reversedarr.length; i++) {
        sum2 += reversedarr[i][i];
    }

    return Math.abs(sum1 - sum2);
}
