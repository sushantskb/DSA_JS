function fact(item){
    if(item == 0){
        return 1;
    }
    return item * fact(item - 1);
}

n = 5;
console.log(fact(n));