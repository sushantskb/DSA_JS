function countAndSay(num) {
  let str = "1";

    for (let j = 1; j < n; j++) {
        let result = "";
        let i = 0;

        while (i < str.length) {
            let count = 1;

            while (i + 1 < str.length && str[i] === str[i + 1]) {
                count++;
                i++;
            }

            result += count + str[i];
            i++;
        }

        str = result;
    }

    return str;
}

console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(2)); // Output: "11"
console.log(countAndSay(3)); // Output: "21"
console.log(countAndSay(4)); // Output: "1211"
console.log(countAndSay(5)); // Output: "111221"