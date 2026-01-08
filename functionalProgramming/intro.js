function add(a,b){
    let sum = a + b;
    return sum;
}

let arr = [11,add,12];
console.log(arr[1](1,2));