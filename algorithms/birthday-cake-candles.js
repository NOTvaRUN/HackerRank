/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let lighter = {}
    for(let candle of candles){
        (lighter[candle]) ?
            lighter[candle] = lighter[candle] + 1 :
            lighter[candle] = 1        
    }
    let items = Object.keys(lighter);
    return lighter[items[items.length - 1]]
}
