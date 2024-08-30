// 13. Write a function to count the number of odd numbers in an array.

function odd(arr){
  var num=arr.filter(element =>(
    element%2!=0
  ))
  console.log(num)
  console.log(num.length)
}

var ar=[2,3,5,4,7,1,9]
odd(ar)