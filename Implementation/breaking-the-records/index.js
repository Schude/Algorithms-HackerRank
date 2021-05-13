function breakingRecords(scores) {
    // Write your code here
    let minScore = scores[0];
    let maxScore = scores[0];
    let min = 0;
    let max = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            min++;
        } else if (scores[i] > maxScore) {
            maxScore = scores[i];
            max++;
        }
    }
    return [max, min];
}
