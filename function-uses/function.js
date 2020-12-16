function evenFly(num){
    let result;
    if(num % 2 == 0){
        result = num;
    }
    else{
       result = num;
    }
    return result;
}

let result = evenFly(10);
let square = result * result;
console.log('square',square);

function evenFlyAll(nums){
    evenArray = [];
    for(var i=0; i<nums.length; i++) {
        const num = nums[i];
        let result =  evenFly(num);
        evenArray.push(result);
    }
    return evenArray;
}
nums = [13, 14, 15, 16, 17];
let numsEven = evenFlyAll(nums);
console.log(numsEven);

// friendsAge = [18,19,20,21,22];
// evenFlyAll(friendsAge);