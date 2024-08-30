// 40. Write a function to check if an array contains duplicate values.

function duplicate(arr){
  let count=0
  for(i=0;i<arr.length-1;i++)
  {
    for(j=i+1;j<arr.length;j++)
      {
        if(arr[i]==arr[j])
        {
          count++;
          
        }
      }
      
    
  }

  if(count>0)
  {
    console.log("contains duplicate elements")
  }
  else{
    console.log("doesn't contains duplicate elements")
  }
}

var ar=[2,3,4,2]
duplicate(ar)