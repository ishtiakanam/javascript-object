var userName = "Ishtiak Anam";
function add(num1 , num2){
    var result = num1 + num2;
    console.log("inside name", userName);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log("outside name", userName);
var sum = add(20,10);
console.log(sum);