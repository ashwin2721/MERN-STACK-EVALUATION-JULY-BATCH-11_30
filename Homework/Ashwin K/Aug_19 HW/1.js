//find the average of all element in an array

function average(arr)
{
 
let sum=0;
for(i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
    console.log(sum)
    
}
console.log(sum/arr.length)
 
}
    
average([3,4,5,6,7,8])