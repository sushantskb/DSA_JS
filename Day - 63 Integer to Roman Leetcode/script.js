var intToRoman = function (num) {
  let result = "";
  let symbol = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; num != 0; i++) {
    while (num >= value[i]) {
      num -= value[i];
      result += symbol[i];
    }
  }

  return result;
};


console.log(intToRoman(3749));