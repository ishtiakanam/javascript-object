function reverseString(str){
    let reverse = "";
    for(let i=0; i < str.length; i++ ){
       let chr = str[i];
       reverse = chr + reverse;
    }
    return reverse;
}
let statements = "Hello guys i am Istiak anam Fahim";
let forAlign = reverseString(statements);
console.log(forAlign);