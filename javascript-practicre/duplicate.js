let name = ["Fahim", "Tafhim", "Nabil", "Nowsat", "Latif", "Munni", "Fahim"];
let uniqueName = [];
for(i = 0; i < name.length; i++){
    let element = name[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);