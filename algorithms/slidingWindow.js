function slidingWindow(arr, k) {
    if (!Array.isArray(arr) || typeof k !== 'number' || k > arr.length || k <= 0) {
        throw new Error('Invalid arguments');
    }

    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;

    for (let end = k; end < arr.length; end++) {
        currentSum += arr[end];
        currentSum -= arr[end - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

try {
    const argument = [1, -1, 5, -2, 3];
    const target = 3;
    console.log(slidingWindow(argument, target)); // Вывод: 6
} catch (e) {
    console.log('ERROR ', e);
}