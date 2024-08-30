// 50. Write a function to check if an array is a palindrome (the array reads the same forward and backward.

function palindrome(ar)
{
  let flag=1
  let rev=ar.slice().reverse()

  console.log(rev);
  

  for(i=0;i<ar.length;i++)
  {
    if(ar[i] !== rev[i])
    {
      flag=0
      break;
    }
  }

  if(flag==1){
    console.log("palindrome")
  }
  else{
    console.log("not palindrome")
  }
}


var prompt=require('prompt-sync')()
var num=prompt("enter the number of elements ")
var arr=[]
for(i=0;i<num;i++)
{
  arr[i]=prompt()
}

palindrome(arr)
