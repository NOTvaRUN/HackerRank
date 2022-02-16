/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let start = a[a.length - 1];
    let end = b[0];
    let savePoint = []
    for(let i = start; i <= end; i++){
        let intSave = true;
        for(let apple of a){
            if(i % apple !== 0){
                intSave = false;
            }
        }
        if(intSave){
            savePoint.push(i)   
        }
    }
    let finalPoint = []
    for(let save of savePoint){
        let intSave = true;
        for(let banana of b){
            if(banana % save !== 0){
                intSave = false;
            }
        }
        if(intSave){
            finalPoint.push(save)
        }
    }
    return finalPoint.length;
}

getTotalX([ 2, 4 ], [ 16, 32, 96 ])
