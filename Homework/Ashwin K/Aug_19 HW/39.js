// 39. Write a function to swap the first and last elements of an array.


function swap(arr){
  temp=arr[0]
  arr[0]=arr[arr.length-1]
  arr[arr.length-1]=temp
  console.log(arr)
}

arr=[1,2,3,4,5]
swap(arr)