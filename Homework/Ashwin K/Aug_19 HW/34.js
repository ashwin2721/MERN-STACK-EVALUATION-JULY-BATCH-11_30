// 34. Write a function to create an array of n numbers, all set to a specific value.


function number(arr,val){
  n=arr.forEach(element => {
   element=arr.fill(val)
  });
  console.log(arr)
}

var ar=[2,3,5,7,9]
number(ar,5)