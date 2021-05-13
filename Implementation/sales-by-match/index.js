function sockMerchant(n, ar) {
    let countPairs = 0;
    let countTypes = {};

    ar.forEach((type) => {
        countTypes[type] = (countTypes[type] || 0) + 1;
    });

    for (const type in countTypes) {
        countPairs += Math.floor(countTypes[type] / 2);
    }

    return countPairs;
}
