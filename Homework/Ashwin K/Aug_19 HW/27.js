// 27. Write a function to find the longest string in an array of strings.




function long(arr){
  let high=[]
  var output= arr.map(element =>(
    element.split('')
  ))
  console.log(output)
  large_index=0
  high=output[0]
  for(i in output)
  {
    if(output[i].length>output[large_index].length)
    {
      large_index=i
      high=output[i]
    }
  }

  for(i=large_index;i<output.length;i++)
    {
      if(output[i].length==output[large_index].length)
      {
        high=output[i]
        console.log(high.join(''))
      }
    }
}

var ar=['sree','rej','sreerej','ss','sreerej']
long(ar)