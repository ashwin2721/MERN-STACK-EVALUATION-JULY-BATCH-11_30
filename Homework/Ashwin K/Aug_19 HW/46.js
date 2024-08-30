// 46. Write a function to reverse the order of words in an array of strings.

function reverse(arr){
  var n=arr.map(Element =>(
    console.log(Element.split('').reverse().join('')) 
   ))
}

var ar=['hello','hai']
reverse(ar)