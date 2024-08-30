// 20. Write a function to insert a new element at a specific index in an array.


var ar=[1,2,3,4,5]
inser(ar,2,10)

function inser(arr,pos,val){
  arr.splice(pos,0,val)
   console.log(arr)
}

