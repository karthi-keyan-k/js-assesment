function findMissingNumber(nums) {
    const n = nums.length;
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    return totalSum - actualSum;
}
console.log(findMissingNumber([3, 0, 1]));