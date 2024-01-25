let data = [13, 78, 56, 89];

let pos = 3;
for (let i = pos; i < data.length - 1; i++) {
    data[i] = data[i+1];
}
data.length = data.length - 1;
console.log(data);