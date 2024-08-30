// 35. Write a function to calculate the product of all elements in an array.

function product(arr){
  var prod=1
  for(i=0;i<arr.length;i++)
  {
    prod=prod*arr[i]
  }

  console.log("product= "+prod)
}

var ar=[2,3,4]
product(ar)