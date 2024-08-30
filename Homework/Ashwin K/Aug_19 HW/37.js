// 37. Write a function to find the index of the first occurrence of the smallest element in an array.

function small(arr)
{
  var smallest=arr[0]
  index=0
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]<smallest)
    {
      smallest=arr[i]
      index=i
    }
  }
  console.log(index)
}

var ar=[7,3,9,5,1,5,8,0]
small(ar)