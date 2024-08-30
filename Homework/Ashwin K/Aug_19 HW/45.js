// 45. Write a function to create an array of elements that are common between two arrays.


var ar1=[1,2,3,4,5]
var ar2=[3,4,6,2]
include(ar1,ar2)

function include(arr1,arr2){
  var n= arr1.filter(Element =>(
    arr2.includes(Element)
  ))
  
  console.log(n)
}
