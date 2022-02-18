/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let totalBars = 0
    for(let i = 0; i < s.length; i++){
        let sum = 0;
        for(let j = i; j < (i + m); j++){
            if(s[j]){
                sum += s[j]
            }
        }
        if(sum === d){
            totalBars++;
        }
    }
    console.log(totalBars);
}

birthday([1, 2, 1, 3, 2], 3, 2)