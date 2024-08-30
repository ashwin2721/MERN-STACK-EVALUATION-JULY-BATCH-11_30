// 16. Write a function to check if an array is sorted in ascending order.

function isascending(arr){
  let flag=0
  for(i=0;i<arr.length-1;i++)
  {
    if(arr[i]>arr[i+1])
    {
      flag=1
    }
  }

  if(flag==0)
  {
    console.log("array is in ascending order")
  }
  else{
    console.log("not sorted in ascending order")
    
  }
}

var ar=[1,3,4,7,8,6]
isascending(ar)