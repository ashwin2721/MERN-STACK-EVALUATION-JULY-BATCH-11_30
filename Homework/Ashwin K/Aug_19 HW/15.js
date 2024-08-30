// 15. Write a function to find the mode (most frequent element) in an array.

function frequentelement(arr){
   let frequent=[]
   let maxfrequent=0
   let index=0

   arr.forEach(element => {
   frequent[element]=(frequent[element]||0)+1 

   if(maxfrequent<frequent[element])
   {
    maxfrequent=frequent[element]
    index=element
   }
   });

   console.log(index)


}

var ar=[2,3,5,2,5,4,2,5,6,5,]
frequentelement(ar)