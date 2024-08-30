// 32. Write a function to find the last element in an array that is less than a given value.


function lasts(arr,val)
{
 let last=arr[0]
  for(i=arr.length;i>0;i--)
  {
    if(arr[i]<val)
    {
      last=arr[i]
      break
    }
  }
  console.log(last)
}

var ar=[3,4,5,1,6,7,5,7,6]
lasts(ar,5)
