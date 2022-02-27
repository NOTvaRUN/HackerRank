/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let subArray = {};
    for (let i = 0; i < a.length; i++) { 
        subArray[i] = [];
        for (let j = i; j < a.length; j++) {
            if(subArray[i].length == 0){
                subArray[i].push(a[j]);
            } else {
               let createsSub = true;
               for(let k = 0; k < subArray[i].length; k++){
                    if(!(a[j] - subArray[i][k] <= 1)){
                        createsSub = false;
                    }
               }
               if(!createsSub){
                   subArray[i].push(a[j]);
               }
            }
        }
    }
    console.log(subArray)
}

pickingNumbers([ 4, 6, 5, 3, 3, 1 ])