var threeSumClosest = function (nums, target) {
  let closetSum = Infinity;
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (Math.abs(sum - target) < Math.abs(closetSum - target)) {
          closetSum = sum;
        }
      }
    }
  }

  return closetSum;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
