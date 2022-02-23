/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxSpent = 0;
    for(let key of keyboards){
        for(let drive of drives){
            let expenditure = key + drive;
            if(expenditure > maxSpent && expenditure <= b){
                maxSpent = expenditure;
            }
        }
    }
    return maxSpent ?? -1;
}
console.log(getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10))