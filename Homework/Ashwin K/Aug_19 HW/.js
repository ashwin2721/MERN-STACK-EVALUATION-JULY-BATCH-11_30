// 7. Write a function to rotate an array to the right by one position.

function rotateright(arr){
  last=arr.pop()
  arr.splice(0,0,last)
  console.log(arr);
  
}

var ar=[1,2,3,4,5,6,7]
rotateright(ar)