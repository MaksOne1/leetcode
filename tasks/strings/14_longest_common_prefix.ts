function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }

    const shortestStr = strs.reduce((a, b) => (a.length < b.length ? a : b));

    let low = 0;
    let high = shortestStr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const prefix = shortestStr.substring(0, mid + 1);

        if (strs.every(str => str.startsWith(prefix))) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return shortestStr.substring(0, high + 1);
}