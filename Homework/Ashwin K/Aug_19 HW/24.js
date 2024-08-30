// 24. Write a function to remove all odd numbers from an array.


function even(arr){
  var ev= arr.filter(element =>(
    element%2==0
  ))
  console.log(ev);
  
}

var ar=[2,3,4,5,6,7,8,9]
even(ar)