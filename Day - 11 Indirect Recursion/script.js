function buyApple(cost) {
  if (cost > 0) {
    console.log("I have", cost, "rupees", "and", totApple, "apple");
    buyMore(cost);
  } else {
    console.log("Total Apple", totApple);
    console.log("Wallet limit exceeded");
  }
}

function buyMore(cost) {
  totApple++;
  buyApple(cost - 10); // Assuming one apple costs 10 rupees.
}
let money = 100;
let totApple = 0;
buyApple(money);