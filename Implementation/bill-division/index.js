function bonAppetit(bill, k, b) {
    // Write your code here

    bill.splice(k, 1);

    let realB = bill.reduce((total, curr) => total + curr) / 2;

    if (b !== realB) {
        console.log(b - realB);
    } else {
        console.log("Bon Appetit");
    }
}
