// 4. Write a function to remove duplicate values from an array.

function duplicate(arr){
  var a= new Set(arr)
  var arr1=Array.from(a)
  console.log(arr1)
}

var ar=[2,3,5,3,2,7,5,7]
duplicate(ar)