function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const right  = [];
    const left = [];
    const equal = [];
    const pivot = arr[Math.floor(arr.length / 2)];

    for (const item of arr) {
        if (item > pivot) {
            right.push(item);
        } else if (item < pivot) {
            left.push(item);
        } else {
            equal.push(item);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

const arr = [5, 4, 8, 3, 1, 9, 2, 7, 6];

console.log(quickSort(arr));