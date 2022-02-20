
/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */



// original (failed by test cases)
// function formingMagicSquare(s) {
//     // Write your code here
//     let expenses = []
//     for(let i = 0;i < s.length; i++){
//         let rowSum = returnRowSum(s, i);
//         let numToReplace = 0;
//         let expense = ['n', 'n', 'n'];
//         let currRow = s[i]
//         if(rowSum !== 15){
//             numToReplace = 15 - rowSum;
//             for(let j = 0; j < currRow.length; j++){
//                 let array = [s[i][0], s[i][1], s[i][2]];
//                 let tempC  = numToReplace + array[j];
//                 array[j] = tempC;
//                 let colCount = returnColSum(array)
//                 if(colCount == 15){
//                     expense[j] = Math.abs(tempC - currRow[j]);
//                 }
//             }
//         }
//         expenses.push(expense);
//     }
//     console.log(expenses);
//     let sum = 0;
//     for(let expense of expenses){
//         let min = 10;
//         for(let cost of expense){
//             if(cost !== 'n' && cost < min){
//                 min = cost;
//             }
//         }
//         console.log(min);
//         if(min !== 10){
//             sum += min;
//         }
//     }
//     return sum
// }


function returnRowSum(s, n){
    return s[n][0] + s[n][1] + s[n][2];
}

function returnColSum(s){
    return s[0] + s[1] + s[2];
}
// https://www.dr-mikes-math-games-for-kids.com/3x3-magic-square.html

function formingMagicSquare(s){
    var min = 100;
    var perm =  [[[2, 7, 6], [9, 5, 1], [4, 3, 8]],
                [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
                [[8, 1, 6], [3, 5, 7], [4, 9, 2]], 
                [[6, 1, 8], [7, 5, 3], [2, 9, 4]], 
                [[4, 9, 2], [3, 5, 7], [8, 1, 6]], 
                [[8, 3, 4], [1, 5, 9], [6, 7, 2]], 
                [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
                [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
                ];
    for(var i = 0; i < 8; i++) {
        var sum = 0;
        for(var x = 0; x < 3; x++) {
            for(var y = 0; y < 3; y++) {
                sum += Math.abs(perm[i][x][y] - s[x][y]);
            }
        }
        if (sum < min) {
            min = sum;
        }
    }
    console.log(min);
}
console.log(formingMagicSquare([ [ 2, 5, 4 ], [ 4, 6, 9 ], [ 4, 5, 2] ]))
// console.log(formingMagicSquare([ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]))
// console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]))