function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        }
        if (b[i] > a[i]) {
            bob++;
        }
    }
    return [alice, bob];
}
