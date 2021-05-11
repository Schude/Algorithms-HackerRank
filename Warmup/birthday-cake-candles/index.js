function birthdayCakeCandles(candles) {
    // Write your code here
    let maxCandle = Math.max(...candles);

    let count = 0;

    candles.forEach((candle) => {
        candle === maxCandle ? count++ : "";
    });

    return count;
}
