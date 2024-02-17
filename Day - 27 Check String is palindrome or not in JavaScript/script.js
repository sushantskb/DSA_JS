async function generateString(len) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < len; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function palindrome() {
  let string = await generateString(5);
  console.log(string);
  let start = 0;
  let end = string.length - 1;
  while (end > start) {
    if (string[start] != string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

palindrome().then(isPalindrome => {
    console.log(isPalindrome);
    if(isPalindrome){
        console.log("It's a palindrome");
    } else {
        console.log("It's not a palindrome");
    }
})