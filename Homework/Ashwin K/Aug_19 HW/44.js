// 44. Write a function to remove all elements from an array that are less than a given value.


var arr=[2,3,2,4,6,3]
rem_el(arr,4)

function rem_el(arr,val){
  var n=arr.filter(Element =>(
    Element>val
  ))
  console.log(n)
}
