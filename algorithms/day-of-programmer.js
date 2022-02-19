/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    let yt;
    if(year % 4 == 0){
        if(year % 400 == 0){
            yt = 'l';
        } else {
            if(year % 100 == 0){
                yt = 'nl';
            } else {
                yt = 'l';
            }
        }
        
    } else {
        yt = 'nl';
    }
    if(year >= 1700 &&  year <= 1917){
        if(year % 4 == 0){
            yt = 'l';
        }
    }
    if(year == 1918){
        return '26.09.' + year;
    } else {
        if(yt == 'l'){
            return '12.09.' + year;
        } else {
            return '13.09.' + year;
        }
    }
}
console.log(dayOfProgrammer(1700));