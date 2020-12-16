let name = "I am a good person.I don't snore at night";
let count = 0;
for(let i = 0; i < name.length; i++){
    let element = name[i];
    if(element == " "){
    count++;
    }
}
count++;
console.log(count);