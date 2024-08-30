// 36. Write a function to find the index of the first occurrence of the largest element in an array.


function large(arr){
  var largest=arr[0]
  var index=0

  for(i=0;i<arr.length;i++)
  {
    if(arr[i]>largest)
    {
      largest=arr[i]
      index=i
    }
  }
  console.log("index= "+index)
}
var ar=[7,3,9,5,1,5,8,0]
large(ar)