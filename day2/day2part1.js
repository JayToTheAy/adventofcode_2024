const fs = require('fs');
const readline = require('readline');

function diff(A) {
    return A.map(Number).slice(1).map(function(n, i) { return n - A[i]; });
  }

async function partOne(){
    const fileStream = fs.createReadStream('input.txt');

    let rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    var numSafe = 0;
    for await (let line of rl){
        diffArray = diff(line.split(' '));
        if(diffArray[0] >= 1){
            var lineSafe = whenIncreasing(diffArray);
        } else if(diffArray[0] <= -1){
            var lineSafe = whenDecreasing(diffArray);
        } else {
            var lineSafe = false;
        }
        if(lineSafe){
            numSafe++;
        }

    }
    console.log("P1: ", numSafe);
}

function whenIncreasing(line){
    for(let i of line){
        if(!(i >= 1 && i <= 3)){
            return false;
        }
    }
    return true;
}

function whenDecreasing(line){
    for(let i of line){
        if(!(i <= -1 && i >= -3)){
            return false;
        }
    }
    return true;
}

partOne();