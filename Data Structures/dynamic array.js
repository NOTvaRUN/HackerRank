/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
// understanding this is a bitch, but once you do its pretty easy.

function dynamicArray(n, queries) {
    // Write your code here
    let array = new Array(n);
    for(let i = 0; i < array.length; i++){
        array[i] = [];
    }
    let lastAnswer = 0;
    let t = []
    for(let query of queries){
        let q = query[0];
        let x = query[1];
        let y = query[2];
        switch(q){
            case 1:
                array[index(x, lastAnswer)].push(y);
                break;
            case 2:
                lastAnswer = array[index(x, lastAnswer)][y];
                t.push(lastAnswer);
                break;
        }
    }
    return t;
}

function index(x, lastAnswer) {
    return ((x ^ lastAnswer) % 2);
}
dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ])