var myAtoi = function(s) {
    // Remove leading whitespace
    s = s.trim();
    
    if (s.length === 0) return 0;
    
    let sign = 1;
    let result = 0;
    let i = 0;
    const maxInt = 2**31 - 1;
    const minInt = -(2**31);
    
    if (s[i] === '-' || s[i] === '+') {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        if (sign * result > maxInt) return maxInt;
        if (sign * result < minInt) return minInt;
        i++;
    }
    
    return sign * result;
};


console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("0-1"));