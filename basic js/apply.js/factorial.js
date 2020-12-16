 function factorial(n){
     var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
 }
 
 let result = factorial(6);
 console.log(result);