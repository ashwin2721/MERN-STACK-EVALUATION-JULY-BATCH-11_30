// 9. Write a function to find the sum of all odd numbers in an array.

function oddsum(arr){
  var num=arr.filter(element =>(
    element%2!=0
  ))
  let sum=0
  for(i in num)
  {
    sum=sum+num[i]
  }
  console.log("sum= "+ sum);
  
}

var ar=[2,3,5,7,8,6]
oddsum(ar)