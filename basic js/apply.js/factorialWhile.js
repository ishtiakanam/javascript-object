function factorial(n){
    let i = 1;
    let factorial = 1;
    while(i <=n){
    factorial = factorial * i
    //console.log(i, factorial);
    i++
    }
    return factorial;
}
let result = factorial(5);
console.log(result);