/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let obj = {};
    for (let item of strings) {
        (!obj[item]) ?
            obj[item] = 1 :
            obj[item]++;
    }
    
    let tempArr = [];
    for (let item of queries) {
        tempArr.push(obj[item] ?? 0);
    }
    console.log(tempArr)
}

matchingStrings([ 'aba', 'baba', 'aba', 'xzxb' ], [ 'aba', 'xzxb', 'ab' ])
