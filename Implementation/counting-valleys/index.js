function countingValleys(steps, path) {
    // Write your code here
    path = path.split("");
    let currentLevel = 0;
    let count = 0;

    path.map((step) => {
        if (step === "U") {
            currentLevel++;
        } else {
            currentLevel--;
        }
        if (currentLevel === 0 && step === "U") {
            count++;
        }
    });
    return count;
}
