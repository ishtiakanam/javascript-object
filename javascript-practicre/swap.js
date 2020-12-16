let a = 5;
let b = 7;
//console.log("Bafore swap: a=", a, "b=", b);
let temp = a;
a = b;
b = temp;
//console.log("After swap: a=", a, "b=", b);


let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y;
//console.log("After swap: x=", x, "y=", y);

let p = 5;
let q = 7;

[p, q] = [q, p];
console.log("After swap: p=", p, "q=", q);