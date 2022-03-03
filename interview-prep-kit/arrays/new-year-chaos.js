/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let skippedby = 0;
    
    for(let [index, value]of q.entries()){
        if(value !== (index + 1)){
            skippedby = value - (index + 1);

            console.log(skippedby)
            if(skippedby >= 2){
                console.log('too chaotic');
            }
        }
    }
    console.log(skippedby);
    
}

minimumBribes([ 2, 1, 5, 3, 4 ])