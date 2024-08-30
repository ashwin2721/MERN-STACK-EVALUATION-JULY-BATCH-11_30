// 6. Write a function to find the second smallest element in an array.

function smallest(arr){
  var sorted=arr.sort((a,b)=>a-b)
  console.log(sorted[1])
}

var ar=[4,2,7,3,8]
smallest(ar)