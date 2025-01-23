function letterCombinations(digits) {
  if (!digits || digits.length === 0) return [];

  const digitToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let combinations = [""];

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const letters = digitToLetters[digit];
    const newCombinations = [];

    for (let j = 0; j < combinations.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        newCombinations.push(combinations[j] + letters[k]);
      }
    }

    combinations = newCombinations;
  }

  return combinations;
}

const digits = "23";
console.log(letterCombinations(digits));
