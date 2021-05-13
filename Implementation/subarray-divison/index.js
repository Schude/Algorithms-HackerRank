function birthday(s, d, m) {
    let count = 0;
    let segments = [];

    s.forEach((element, index) => {
        segments.push(s.slice(index, index + m));
    });
    segments = segments.filter((eleman) => eleman.length === m);
    for (let i = 0; i < segments.length; i++) {
        let total = segments[i].reduce((sum, curr) => sum + curr);
        if (total === d) {
            count++;
        }
    }
    return count;
}
