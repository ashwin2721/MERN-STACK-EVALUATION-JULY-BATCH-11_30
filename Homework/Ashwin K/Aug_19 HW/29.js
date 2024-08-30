// 29. Write a function to concatenate all strings in an array into a single string.

function concatenate(arr){
  var string=[]
  for(i in arr)
  {
    string=string+arr[i]
  }

  console.log(string)
}

var ar=['sreerej','kiran','anujith']
concatenate(ar)