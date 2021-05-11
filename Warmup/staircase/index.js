function staircase(n) {
    // Write your code here
    for (let i = 1; i < n + 1; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}
