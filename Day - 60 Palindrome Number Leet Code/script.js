var isPalindrome = function (x) {
  let str = x.toString();
  let num = [...x.toString()].reverse();
  let revNum = num.join('');
  if (revNum === str) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(-121));
