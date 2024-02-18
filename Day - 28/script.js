let str = "hello";
let strObj = {};
let maxKey = "";
for(let i = 0; i < str.length; i++){
    let key = str[i];
    if(!strObj[key]){
        strObj[key] = 0;
    }
    strObj[key]++
    if(maxKey == "" || strObj[maxKey] < strObj[key]){
        maxKey = key;
    }
}
console.log(`The max character occured in ${str} is ${maxKey}`);
console.log(strObj);