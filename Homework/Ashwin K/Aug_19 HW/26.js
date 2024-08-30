// 26. Write a function to check if two arrays are equal (have the same elements in the same order).

function same(arr1,arr2){
  flag=0
  for(i=0;i<arr1.length;i++)
  {
    if(arr1[i] != arr2[i])
    {
      flag=1
    }
  }

  if(flag==0)
  {
    console.log("equal arrays")
  }
  else{
    console.log("unequal arrays")
  }
}

var ar1=[2,3,4,5]
var ar2=[2,3,4,5]

same(ar1,ar2)