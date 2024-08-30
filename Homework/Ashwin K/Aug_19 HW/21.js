// 21. Write a function to split an array into two halves.


function half(arr){
  var mid=(arr.length)/2
  var len=arr.length
  var sp1=arr.slice(0,mid)
  var sp2=arr.slice(mid,len)
  console.log(sp1);
  console.log(sp2);
  
  
}

var ar=[1,2,3,4,5,6,7,8]
half(ar)