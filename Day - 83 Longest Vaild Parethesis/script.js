/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let mult = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      let current = s.slice(i, j);
      let balance = 0;
      let valid = true;

      for (let k = 0; k < current.length; k++) {
        if (current[k] === "(") {
          balance++;
        } else {
          balance--;
        }

        if (balance < 0) {
          valid = false;
          break;
        }
      }

      if (valid && balance === 0) {
        mult = Math.max(mult, current.length);
      }
    }
  }

  return mult;
};

console.log(longestValidParentheses("()(())"));    // 6
console.log(longestValidParentheses(")()()()()")); // 8
console.log(longestValidParentheses(")()())"));    // 4