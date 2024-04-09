var lengthOfLongestSubstring = function (s) {
    let list = [];
    let maxLength = 0;
    for (let ele of s) {
      if (list.includes(ele)) {
        maxLength = Math.max(maxLength, list.length);
        let index = list.indexOf(ele);
        list = list.slice(index + 1);
      }
      list.push(ele);
    }
    maxLength = Math.max(maxLength, list.length);
    return maxLength; // Return the length of the longest substring
  };
  
  let s = "abcabcbb";
  console.log(lengthOfLongestSubstring(s)); // Output: 3
  

