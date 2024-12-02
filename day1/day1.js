var fs = require('fs')

function splitLists(input){
    let leftList = [];
    let rightList = [];
    for(line of input.split(/[\r\n]+/)){
       let vals = line.split("   ");
       leftList.push(Number(vals[0])), rightList.push(Number(vals[1]));
    }
    leftList.sort(), rightList.sort();
    return [leftList, rightList];
}

function partOneSplit(input){
    let [leftList, rightList] = splitLists(input);
    let sum = 0;
    for(let i = 0; i < leftList.length; i++){
        let diff = Math.abs(leftList[i] - rightList[i])
        sum += diff
    }
    return sum;
}

function partTwo(input){
    // setup our lists
    let [leftList, rightList] = splitLists(input);
    // map rightList to a Map
    const numMap = new Map();
    for(let i = 0; i < rightList.length; i++){
        let val = Number(rightList[i]);
        if(numMap.get(val) !== undefined){
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
        }
    }
    // now, calculate our value from leftMap
    let sum = 0;
    for(let i = 0; i < leftList.length; i++){
        let val = Number(leftList[i]);
        let adder = val * (numMap.get(val) !== undefined ? numMap.get(val) : 0);
        sum += adder;
    }
    return sum;
}

try {
    var data = fs.readFileSync('input.txt', 'utf8')
    console.log("P1: ", partOneSplit(data))
    console.log("P2: ", partTwo(data))
} catch(e){
    console.log("Errored: ", e.stack)
}
