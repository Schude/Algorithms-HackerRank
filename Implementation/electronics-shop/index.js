function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let max = -1;

    keyboards.forEach((keyboard) => {
        drives.forEach((drive) => {
            let shoppingList = drive + keyboard;
            if (shoppingList > max && b >= shoppingList) {
                max = drive + keyboard;
            }
        });
    });
    return max;
}
