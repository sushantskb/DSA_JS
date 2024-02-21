let data = new Map([
    ['name', 'Rahul'],
    [true, 'bool key'],
    [100, 'hundred']
]);

// Adding the data
data.set('color', 'green');

// To check if any key is present or not
console.log(data.has(100));

// To get the value of a particular key
console.log(data.get(100));

// To clear all the data
data.clear()

// Using loops in Map for iteration
// For of loop
for (const i of data) {
    console.log(i);
}

// Using for each
data.forEach((element, key) => {
    console.log(`${key} : ${element}`);
});

console.log(data);