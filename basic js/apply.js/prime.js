function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "Not a prime number";
           
        }
    }
    return "It is a prime number"
}
let result = isPrime(128);
console.log(result);