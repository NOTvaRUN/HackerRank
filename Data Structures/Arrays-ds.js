/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let tempArray = [];
    for (let i = (a.length - 1); i >= 0; i--) {
        tempArray.push(a[i]);
    }
    return tempArray;
}
console.log(reverseArray([ 1, 4, 3, 2 ]));