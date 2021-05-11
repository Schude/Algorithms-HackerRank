function plusMinus(arr) {
    // Write your code here

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    arr.forEach((element) => {
        if (element > 0) {
            positiveCount++;
        } else if (element < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });
    console.log(positiveCount / arr.length);
    console.log(negativeCount / arr.length);
    console.log(zeroCount / arr.length);
}
