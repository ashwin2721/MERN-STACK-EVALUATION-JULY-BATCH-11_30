//count the number of elements that greater than the given number


function greater(arr, value) {
    let count = 0;
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] > value)
            count++;
    }
    
    console.log(count)
}
greater([3,2,4,5,6,7,8,9,0], 7)
