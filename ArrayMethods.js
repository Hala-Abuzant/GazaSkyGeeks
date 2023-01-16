var arr=[1,2,3,4,5]

var arr2=arr.map(x => x * 2);

console.log(arr2);

var arr3=arr2.filter(x=>(x>3));

console.log(arr3);

// var arr4=arr3.join().replaceAll(',', '-')
var arr4=arr3.join('-')

console.log(arr4); 

var arr5=arr4.split("-").map(x=>(parseInt(x)))

console.log(arr5)

const arr6 = arr5.reduce(function (previousValue, currentValue){
    return previousValue + currentValue;
})

console.log(arr6)


