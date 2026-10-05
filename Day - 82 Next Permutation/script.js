
var nextPermutation = function (nums) {
  let n = nums.length;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let min = Infinity;
      let minIndex = -1;

      for (let j = i + 1; j < n; j++) {
        if (nums[j] > nums[i] && nums[j] < min) {
          min = nums[j];
          minIndex = j;
        }
      }

      [nums[i], nums[minIndex]] = swap(nums[i], nums[minIndex]);

      nums.splice(
        i + 1,
        n - i - 1,
        ...nums.slice(i + 1).sort((a, b) => a - b)
      );

      return;
    }
  }

  nums.sort((a, b) => a - b);
};

function swap(a, b) {
  return [b, a];
}

let nums = [1, 2];
nextPermutation(nums);
console.log(nums);
