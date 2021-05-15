let minCost = Infinity;
let possibleMagicSquares = [
    [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2],
    ],
    [
        [6, 1, 8],
        [7, 5, 3],
        [2, 9, 4],
    ],
    [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6],
    ],
    [
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8],
    ],
    [
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2],
    ],
    [
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6],
    ],
    [
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4],
    ],
    [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8],
    ],
];

possibleMagicSquares.map((magicSquare) => {
    let cost = 0;
    for (let i = 0; i < magicSquare.length; i++) {
        for (let j = 0; j < magicSquare[i].length; j++) {
            cost += Math.abs(square[i][j] - magicSquare[i][j]);
        }
    }
    if (cost < minCost) {
        minCost = cost;
    }
});
return minCost;
