let marks = [61, 67, 66, 89, 90, 98, 94];
let max = marks[0];
for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("The highest number is: ",max);
