// 38. Write a function to find the index of the last occurrence of a specific value in an array.

function occurrence(arr,val){
  var index=0
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]==val)
    {
      index=i
    }
  }
  console.log("index= "+ index)
}

var ar=[2,3,5,4,5,3]
occurrence(ar,5)