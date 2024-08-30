// 12. Write a function to count the number of even numbers in an array.


function even(arr){
  var num=arr.filter(element =>(
    element%2==0
  ))
  console.log(num)
  console.log(num.length)
}

var ar=[2,3,5,4,7,1,6,8]
even(ar)