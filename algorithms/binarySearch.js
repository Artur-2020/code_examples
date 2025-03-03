function binarySearch(arr, value, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    const middleIndex = Math.floor((left + right) / 2);
    const middleValue = arr[middleIndex];

    if (middleValue === value) {
        return middleIndex;
    } else if (value > middleValue) {
        return binarySearch(arr, value, middleIndex + 1, right);
    } else {
        return binarySearch(arr, value, left, middleIndex - 1);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];

console.log(binarySearch(sortedArray, 2)); // 4
console.log(binarySearch(sortedArray, 1)); // 0
console.log(binarySearch(sortedArray, 13)); // 6
console.log(binarySearch(sortedArray, 42)); // -1


