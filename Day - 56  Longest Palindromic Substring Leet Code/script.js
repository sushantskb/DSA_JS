var longestPalindrome = function (s) {
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i + 1);
    let len2 = expandFromCenter(s, i, i);

    let len = Math.max(len1, len2);

    if (end - start < len) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);

  function expandFromCenter(string, i, j) {
    while (
      i >= 0 &&
      j < string.length &&
      string.charAt(i) === string.charAt(j)
    ) {
      i--;
      j++;
    }
    return j - i - 1;
  }
};

console.log(longestPalindrome("cbbd"));
