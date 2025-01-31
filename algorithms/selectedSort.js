function selectedSort(arr) {
    for (let i = 0, len = arr.length; i < len; i++ ) {
        let minIndex = i;
        for (let j = minIndex + 1; j < len; j++ ) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectedSort([64, 25, 12, 22, 11]));
