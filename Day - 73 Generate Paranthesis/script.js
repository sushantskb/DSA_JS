/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function backtrack(currentStr, openCount, closeCount) {
        if(currentStr.length === n * 2) {
            res.push(currentStr);
            return;
        }
        if(openCount < n) {
            backtrack(currentStr + '(', openCount + 1, closeCount);
        }
        if(closeCount < openCount) {
            backtrack(currentStr + ')', openCount, closeCount + 1);
        }
    }

    backtrack('', 0, 0);
    return res;
};

console.log(generateParenthesis(1));