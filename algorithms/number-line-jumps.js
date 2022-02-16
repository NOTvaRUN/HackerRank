/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */
// i was high when i solved this
// This one is not optimized


function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let intersectionVar = (x1 > x2) ? 'x1' : 'x2';
    let notIntersected = true;
    let maxInteration = 3000;
    while(notIntersected){
        x1 += v1;
        x2 += v2;
        if (x1 == x2) {
            return 'YES';
        }
        switch(intersectionVar){
            case 'x1':
                if(x2 > x1){
                    return 'NO'
                }
                break;
            case 'x2':
                if(x1 > x2){
                    return 'NO';
                }
        }
        if(maxInteration == 0){
            notIntersected = false;
            return 'NO';
        }
        maxInteration--;
    }
}
console.log(kangaroo(2081, 8403, 9107, 8400))