var strStr = function(haystack, needle) {
    let res = -1;
    if (haystack.includes(needle)) {
        res = haystack.indexOf(needle); // for last use lastIndexOf
    }
    return res;
};
console.log(strStr("hello", "ssll"))