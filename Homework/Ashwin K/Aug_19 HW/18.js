// 18. Write a function to merge two arrays alternately (e.g., [1, 2] and [3, 4] becomes [1, 3, 2, 4]).

arr1=[2,3,4,8,9]
arr2=[5,6,7,4,1,5]
mergearray(arr1,arr2)

function mergearray(ar1,ar2){
  ar=[]
  ar1len=ar1.length
  ar2len=ar2.length
  maxlen=Math.max(ar1len,ar2len)

 for(i=0;i<maxlen;i++)
 {
  if(i<ar1len)
  {
    ar.push(ar1[i])
  }
  if(i<ar2len)
  {
    ar.push(ar2[i])
  }
 }
console.log(ar)
}
