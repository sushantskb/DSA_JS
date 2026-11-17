/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    // Handle multiplication by zero
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let m = num1.length;
    let n = num2.length;

    // Maximum possible result length is m + n
    let result = new Array(m + n).fill(0);

    // Traverse both strings from right to left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let digit1 = Number(num1[i]);
            let digit2 = Number(num2[j]);

            let product = digit1 * digit2;

            // Add the existing value at this position
            let sum = product + result[i + j + 1];

            // Store the current digit
            result[i + j + 1] = sum % 10;

            // Add carry to the previous position
            result[i + j] += Math.floor(sum / 10);
        }
    }

    // Convert array to string and remove leading zeros
    return result.join("").replace(/^0+/, "");
};


console.log(multiply("2", "3"))
