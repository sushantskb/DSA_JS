var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let newString = [];
    let n = s.length;
    let formula1 = 2 * (numRows - 1);
  
    for (let i = 0; i < numRows; i++) {
      let index = i;
      while (index < n) {
        newString.push(s.charAt(index));
        if (i !== 0 && i !== numRows - 1) {
          let formula2 = formula1 - 2 * i;
          let index2 = index + formula2;
          if (index2 < n) {
            newString.push(s.charAt(index2));
          }
          index = index + formula1;
        } else {
          index = index + formula1;
        }        
      }
    }
    return newString.join('');
  };
  
  console.log(convert("PAYPALISHIRING", 3));  
  