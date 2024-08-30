// 8. Write a function to rotate an array to the left by one position.

function rotateleft(arr){
  var first=arr.shift()
  arr[arr.length]=first
  console.log(arr)
  
  
}

var ar=[1,2,3,4,5,6,7]
rotateleft(ar)