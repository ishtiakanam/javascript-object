function isLeafYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}

const check2000 = isLeafYear(2000);
console.log(check2000);