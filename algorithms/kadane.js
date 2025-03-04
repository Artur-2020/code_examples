function maxSubArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Invalid argument: must be a non-empty array');
    }

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}