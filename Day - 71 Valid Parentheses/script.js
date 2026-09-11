/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  let endStrings = new Set([")", "}", "]"]);
  for (char of s) {
    if (bracketMap[char]) {
        stack.push(bracketMap[char]);
    } else if(endStrings.has(char)) {
        if(stack.pop() !== char) {
            return false;
        }
    }
  }
  return stack.length === 0;
};


console.log(isValid("()[]{}"));