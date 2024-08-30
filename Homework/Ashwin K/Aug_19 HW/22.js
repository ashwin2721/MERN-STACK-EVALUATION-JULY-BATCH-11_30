// 22. Write a function to create a new array with the square of each element from the original array.


function squre(arr){
  var sq=arr.map(element =>(
    element*element
  ))

  console.log(sq);
  
}

var ar=[2,3,4,5,6]
squre(ar)