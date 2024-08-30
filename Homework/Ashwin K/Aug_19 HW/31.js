// 31. Write a function to find the first element in an array that is greater than a given value.


function firstl(arr,val){
  let first=0

  for(i=0;i<arr.length;i++)
  {
    if(arr[i]>val)
    {
      first=ar[i]
      break
    }
  }

  console.log(first)
}

var ar=[4,5,2,4,1,8,0,9]
firstl(ar,5)