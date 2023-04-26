/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    sum = num.toString()
    while (sum.length > 1) {
        temp = 0;
        for(let i = 0; i < sum.length; i++){
            temp += parseInt(sum[i])
        }
        sum = temp.toString()
    }
    return sum
};
