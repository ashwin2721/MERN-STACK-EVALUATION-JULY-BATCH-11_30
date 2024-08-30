// 5. Write a function to find the second largest element in an array.

function largest(arr){
  var sorted=arr.sort((a,b)=>a-b)
  console.log(sorted[(sorted.length)-2])
}

var ar=[4,2,7,3,8]
largest(ar)