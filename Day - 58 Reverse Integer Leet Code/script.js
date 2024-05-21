var reverse = function (x) {
  let MIN_VALUE = Math.pow(-2, 31);
  let MAX_VALUE = Math.pow(2, 31) - 1;
  let rev = 0;
  while (x !== 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = (x / 10) | 0;
  }

  if (rev >= MIN_VALUE && rev <= MAX_VALUE) {
    return parseInt(rev);
  } else {
    return 0;
  }
};

console.log(reverse(-120));
