/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if(i !== k){
            total += bill[i];
        }
    }
    total = total / 2;
    if(b === total){
        console.log('Bon Appetit')
    } else {
        console.log(b - total)
    }
}
bonAppetit([ 3, 10, 2, 9 ], 1, 12)