function findLargestNumber(nums) {
    if (nums.length === 0) return null;
    let maxNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
        }
    }
    return maxNum;
}
console.log(findLargestNumber([3, 5, 1, 9, 2]));