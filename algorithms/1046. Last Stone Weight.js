/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        processable = twoHighest(stones)
        smash = Math.abs(processable[0]) - Math.abs(processable[1])
        stones.splice(findElement(stones, processable[0]), 1)
        stones.splice(findElement(stones, processable[1]), 1)
        stones.push(smash)
    }
    return stones[0]
};

function twoHighest(stones){
    sorted = [...stones].sort((a, b)=> a - b)
    max = sorted[sorted.length - 1]
    secondMax = sorted[sorted.length - 2]
    return [max, secondMax]
}

function findElement(stones, item){
    return stones.findIndex(element => element == item)
}
