var threeSum = function (nums) {
  let result = [];
  let triplets = new Set();

  for (let i = 0; i < nums.length; i++) {
    let seen = new Set();
    let target = -nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let complement = target - nums[j];
      if (seen.has(complement)) {
        let triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
        let tripletStr = triplet.toString();
        if (!triplets.has(tripletStr)) {
          result.push(triplet);
          triplets.add(tripletStr);
        }
      }
      seen.add(nums[j]);
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
