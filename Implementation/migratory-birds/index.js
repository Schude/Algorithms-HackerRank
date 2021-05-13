function migratoryBirds(arr) {
    // Write your code here
    let id = 0;

    var countTypes = {};
    arr.forEach((type) => {
        countTypes[type] = (countTypes[type] || 0) + 1;
    });

    let maxValue = 0;
    for (const type in countTypes) {
        if (countTypes[type] > maxValue) {
            maxValue = countTypes[type];
            id = type;
        }
    }
    return id;
}
