// 17. Write a function to check if an array is sorted in descending order.

function isdescending(arr){
  let flag=0
  for(i=0;i<arr.length-1;i++)
  {
    if(arr[i]<arr[i+1])
    {
      flag=1
    }
  }

  if(flag==0)
  {
    console.log("array is in descending order")
  }
  else{
    console.log("not sorted in descending order")
    
  }
}

var ar=[8,6,3,2,1]
isdescending(ar)