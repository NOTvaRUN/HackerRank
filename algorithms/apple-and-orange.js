
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
// countApplesAndOranges(s, t, a, b, apples, oranges)
countApplesAndOranges(2, 3, 1, 5, [-2], [-1])
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;
    for(let apple of apples){
        if(fallsInBetween(apple + a, s, t)){
            appleCount++;
        }
    }
    for(let orange of oranges){
        if(fallsInBetween(orange + b, s, t)){
            orangeCount++;
        }
    }
    console.log(appleCount)    
    console.log(orangeCount)    
}

function fallsInBetween(num, start, end){
    if(num >= start && num <= end){
        return true;
    } else {
        return false;
    }
}