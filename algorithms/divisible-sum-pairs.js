/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let p = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if(i < j && ((ar[i] + ar[j]) % k == 0)){
                p++;
            }
        }
    }
    console.log(p);
}
divisibleSumPairs(6, 3, [ 1, 3, 2, 6, 1, 2 ]);