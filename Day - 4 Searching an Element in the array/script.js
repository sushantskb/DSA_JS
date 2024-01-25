let data = [12,56,4,58,5,8,5];
let item = 5;
let index = undefined;
for(let  i = 0; i < data.length - 1; i++){
    if(data[i] === item){
        index = i;
        break;
    }
}

console.log(`${item} is present in the ${index}th index`);