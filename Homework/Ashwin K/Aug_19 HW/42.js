// 42. Write a function to find the sum of elements in an array that are greater than a given value.


function sum(arr,val){
  var n=ar.filter(Element=>(
    Element>val
  ))
  
  var sum=0;
  for(i=0;i<n.length;i++)
  {
    sum=sum+n[i]
  }
  console.log(sum)
}


ar=[1,2,3,4,5,4,3,7]
sum(ar,4)