/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // // Write your code here
    let array = new Array(n);
    for(let i = 0; i < array.length; i++){
        array[i] = [];
    }
    let lastAnswer = 0;
    let t = [];
    for(let query of queries){
        let q = query[0]; // map it dude.. lol
        let x = query[1];
        let y = query[2];
        let sequence = (x ^ lastAnswer) % n;
        switch(q){
            case 1:
                array[sequence].push(y);
                break;
            case 2:
                // array[index(x, lastAnswer)][y];
                lastAnswer = array[sequence][y % array[sequence].length]
                t.push(lastAnswer)
                break;
        }
    }
    return t;
}
