/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let highest = scores[0];
    let lowest = scores[0];
    let max = 0;
    let min = 0;
    for(let score of scores){
        if(score > highest){
            highest = score;
            max++;
        }
        if(score < lowest){
            lowest = score
            min++
        }
    }
    return `${max} ${min}`;
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])