// 30. Write a function to count the total number of characters in an array of strings.


var arr=['hello','hai','sample','program']
occur(arr)

function occur(ar){
  var sum=0
var output= ar.map(element =>(
  element.split('')
))

console.log(output);

for(i in output)
{
  sum=sum+output[i].length
}

console.log(sum);
}


