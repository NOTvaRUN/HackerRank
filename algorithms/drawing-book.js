/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let closerTo = n / 2;
    if(p <= closerTo){
        return getPairCount(p);
    } else {
        let count = getPairCount(n) - getPairCount(p);
        return count;
    }
}

function getPairCount(c){
    let times = 0;
    if(c === 1){
        return 0;
    }
    if(c % 2 == 0){
        times = c / 2;
    } else {
        times = (c - 1) / 2
    }
    return times;
}

console.log(pageCount(6, 4))