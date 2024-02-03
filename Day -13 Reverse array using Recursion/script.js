function swap(a, b){
    temp = a;
    a = b;
    b = temp;
    return [a, b];
}
function customReverse(data, start, end){
    if(start <= end){
        [data[start], data[end]] = swap(data[start], data[end]);
        customReverse(data, start + 1, end - 1);
    }
    return data;
}
let data = [9, 15, 18, 25, 0];
let temp;
console.log(customReverse(data, 0, data.length - 1));