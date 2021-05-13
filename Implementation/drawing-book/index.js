function pageCount(n, p) {
    if (p === 1 || p === n) {
        return 0;
    }

    if (n - p < p - 0) {
        if (n % 2 === 0) {
            return Math.round((n - p) / 2);
        } else {
            return Math.floor((n - p) / 2);
        }
    } else {
        return Math.floor((p - 0) / 2);
    }
}
