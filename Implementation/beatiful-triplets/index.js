function beautifulTriplets(d, arr) {
    // Write your code here
    let count = 0;
    arr.map((num) => {
        isBeautiful(num, d, arr) ? count++ : "";
    });
    return count;
}

function isBeautiful(firstNum, d, arr) {
    let secondNumIndex = arr.indexOf(firstNum + d);
    let thirdNumIndex = arr.indexOf(firstNum + d * 2);
    if (arr[secondNumIndex] === undefined || arr[thirdNumIndex] == undefined) {
        return false;
    } else {
        return true;
    }
}