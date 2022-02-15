/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let i = 0;
    for(let grade of grades){
        if(grade >= 38){            
           if(grade % 5 >= 3){
                grades[i] = (Math.floor(grade / 5) * 5) + 5;
            } 
        }
        i++;
    }
    return grades;
}
