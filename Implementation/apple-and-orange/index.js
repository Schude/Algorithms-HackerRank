function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    //Removes negatives because negatives goes away from home
    apples = apples.filter((apple) => apple > 0);
    //Removes positives because positives goes away from home
    oranges = oranges.filter((orange) => orange < 0);

    let countApples = 0;
    let countOranges = 0;
    for (let i = 0; i < apples.length; i++) {
        // Index of apple falls
        let fallenIndex = apples[i] + a;
        //Check apple fell into the house
        if (s <= fallenIndex && fallenIndex <= t) {
            countApples++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        // Index of orange falls
        let fallenIndex = oranges[i] + b;
        //Check orange fell into the house
        if (s <= fallenIndex && fallenIndex <= t) {
            countOranges++;
        }
    }

    console.log(countApples);
    console.log(countOranges);
}
