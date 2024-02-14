function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
function seleSort(data){
    for(let i = 0; i < data.length - 1; i++){
        let minNum = i;
        for (let j = i+1; j < data.length; j++) {
            if(data[j] < data[minNum]){
                minNum = j;
            }
        }
        [ data[minNum], data[i] ] = swap(data[minNum], data[i]);
    }
}

let data = [12, 45, 2, 78, 1, 67];
seleSort(data)
console.log(data);