// 49. Write a function to convert all strings in an array to lowercase.

function up(arr){
  var upp=arr.map(element =>(
    element.toLowerCase()
  ))
  
  console.log(upp)
}

// var ar=['hello','hai']
var prompt=require('prompt-sync')()
var num=prompt("enter the number of elements ")
var ar=[]
for(i=0;i<num;i++)
{
  ar[i]=prompt()
}
up(ar)
