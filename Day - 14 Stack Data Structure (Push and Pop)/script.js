function push(val) {
  if (currentSize >= max) {
    throw new Error("Stack is full");
  } else {
    data[currentSize] = val;
    currentSize++;
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    throw new Error("Stack is already empty");
  }
}

let data = [];
let currentSize = 0;
let max = 5;

push(12);
push(145);
push(82);
push(62);

pop();

push(3243);
push(234);

pop();
pop();
pop();
pop();
console.log(data);
