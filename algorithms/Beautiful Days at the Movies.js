/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

func beautifulDays(i int32, j int32, k int32) int32 {
    // Write your code here
    var beautyIndex int32 = 0;
    for index := i; index <= j; index++{
        var isBeatutiful float64 = math.Abs(float64(index - reverse(index))) / float64(k)
        if isBeatutiful == math.Trunc(isBeatutiful){
            beautyIndex++;
        }
    }
    return beautyIndex;
}
