/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    const negative = ( dividend < 0 ) !== ( divisor < 0 )
    let dividendAbs = Math.abs(dividend);
    let divisorAbs = Math.abs(divisor);

    let quotient = 0;

    while (dividendAbs >= divisorAbs) {
        let value = divisorAbs;
        let multiple = 1;

        while (dividendAbs > value + value) {
            value += value;
            multiple += multiple;
        }
        dividendAbs -= value
        quotient += multiple;
    }
    return negative ? -quotient : quotient;
};

console.log(divide(43, 5))