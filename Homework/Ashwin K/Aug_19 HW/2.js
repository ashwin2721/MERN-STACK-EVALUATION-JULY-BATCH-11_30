//check all elements in the array are positive
function positive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
console.log(positive([4, 6, 7, 8, 9, -1, 2, 34, 45])); 
