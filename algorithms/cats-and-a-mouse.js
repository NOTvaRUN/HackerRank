// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let xDistance = Math.abs(x - z);
    let yDistance = Math.abs(y - z);
    if(xDistance > yDistance){
        return 'Cat B';
    } else if(xDistance < yDistance){
        return 'Cat A';
    } else if(xDistance === yDistance){
        return 'Mouse C'
    }
}

console.log(catAndMouse(1, 3, 2))