function test(x){
    console.log(x); // Head Recursion
    if(x > 0){
        test(x-1);
    }
    console.log(x); // Tail Recursion
}
let data = 5;
test(data)