// 19. Write a function to remove the element at a specific index from an array.

var ar=[1,2,3,4,5]
inser(ar,2)

function inser(arr,pos){
  arr.splice(pos,1)
   console.log(arr)
}