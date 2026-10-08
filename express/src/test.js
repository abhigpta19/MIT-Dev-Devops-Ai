const arr = [1,2,3,4,5];

// const arr2 = [];
// for(let i=0;i<5;i++)
// {
//     let val = arr[i]*arr[i];
//     arr2.push(val);
// }

// console.log(arr2);

// const arr2 = arr.map(function(val,idx){
//     return val*val;
// })

const arr2 = arr.filter(function(val,idx){
    if(val%2==1)
        return true;

    return false;
})

console.log(arr2);