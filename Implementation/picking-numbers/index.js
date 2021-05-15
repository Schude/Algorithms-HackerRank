function pickingNumbers(arr) {
    // Write your code here
    let longestLength = 0;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let segments = [];
        segments.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (
                arr[j] === arr[i] ||
                arr[i] + 1 === arr[j] ||
                arr[i] - 1 === arr[j]
            ) {
                segments.push(arr[j]);
                if (segments.length > longestLength) {
                    longestLength = segments.length;
                }
            }
        }
    }
    return longestLength;
}
