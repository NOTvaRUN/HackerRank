/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code 
    let birdGang = {};
    let maxOfType = 0;
    let oreo;
    for(let ar of arr){
        birdGang[ar] ?
        birdGang[ar]++:
        birdGang[ar] = 1
    }
    let mappedKeys = Object.keys(birdGang);
    for(let i = (mappedKeys.length - 1); i >= 0; i--){
        if(birdGang[mappedKeys[i]] >= maxOfType){
            maxOfType = birdGang[mappedKeys[i]];
            oreo = mappedKeys[i];
        }
    }
    console.log(oreo);
}
migratoryBirds([ 1, 1, 1, 4, 4, 4, 5, 3 ])