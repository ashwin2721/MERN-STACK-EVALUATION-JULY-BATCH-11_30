// 11.Write a function to return the last n elements of an array.


function lastn(arr,n){
  
  console.log(arr.slice(-n));
  
}

var ar=[2,3,4,5,6,7,8]
lastn(ar,4)