// 43. Write a function to create a new array by multiplying corresponding elements of two arrays.


var ar1=[1,2,3,4]
var ar2=[1,2,3,4,5,6,7]
var arr=[]
if(ar1.length>=ar2.length)
{
  for(i=0;i<ar2.length;i++)
    {
      arr=ar1[i]*ar2[i];
      process.stdout.write(arr.toString()+" ")
    }
    for(i=ar2.length;i<ar1.length;i++)
    {
      process.stdout.write(ar1[i].toString()+" ")
    }
}

else{
  for(i=0;i<ar1.length;i++)
    {
      arr=ar1[i]*ar2[i];
      process.stdout.write(arr.toString()+" ")
    }
    for(i=ar1.length;i<ar2.length;i++)
    {
      process.stdout.write(ar2[i].toString()+(" "))
    }
}



