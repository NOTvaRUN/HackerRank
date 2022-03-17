/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    let obj = {};
    let a = arr;
    for(let [index, item] of a.entries()){
        let cIndex = index;
        let cItem = item;
        let tMove = d;
        while(tMove > 0){
            if (cIndex !== 0) {
                cIndex -= 1;
                --tMove;
            } else {
                cIndex = (a.length - 1);
                --tMove;
            }
        }
        obj[cIndex] = cItem;
    }
    console.log(Object.values(obj));
}

rotateLeft(4, [ 1, 2, 3, 4, 5 ]);