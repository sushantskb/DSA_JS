class Stack {
  item = [];
  currentSize;
  maxSize;

  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

  push(val) {
    if (this.currentSize <= this.maxSize) {
      this.item[this.currentSize] = val;
      this.currentSize++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      throw new Error("Stack is already empty");
    }
  }

  display() {
    console.log(this.item);
  }
}

data = new Stack(10);
let randomPush = Math.floor(Math.random() * 10);
let randomPop = Math.floor(Math.random() * 9);
for (let i = 0; i < randomPush; i++) {
  data.push(i);
}
console.log("The data after push operation");
data.display();

console.log("Push value ", randomPush);
console.log("Pop value ", randomPop);

for (let i = 0; i < randomPop; i++) {
  data.pop();
}
console.log("The data after pop operation");
data.display();
