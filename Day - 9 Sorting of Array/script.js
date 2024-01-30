function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

let data = [21, 4, 75, 12 , 16];
for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data.length; j++){
        if(data[j] > data[j+1]){
            [data[j], data[j+1]] = swap(data[j], data[j+1]);
        }
    }
}
console.log("Sorted Data: ", data);