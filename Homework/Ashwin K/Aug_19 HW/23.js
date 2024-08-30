// 23. Write a function to remove all even numbers from an array.


function odd(arr){
  var od=arr.filter(element =>(
    element%2==1
  ))
  console.log(od);
  
}

var ar=[2,3,4,5,6,7,8,9]
odd(ar)