const fs = require('fs');
const readline = require('readline');

function diff(A) {
    return A.map(Number).slice(1).map(function(n, i) { return n - A[i]; });
  }

async function partTwo(){
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

async function partTwo(){
    const fileStream = fs.createReadStream('input.txt');

    let rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    var numSafe = 0;
    loop1:
        for await (let line of rl){
            diffArray = diff(line.split(' '));
            flippedAlready = false;
            currentSign = Math.sign(diffArray[0]);
            loop2:
                for(element of diffArray){ // loop for single elements of a line
                    if(Math.sign(element) != currentSign){
                        if(flippedAlready === false){
                            flippedAlready = true;
                            console.log(element);
                            currentSign = Math.sign(element);
                            if(Math.abs(element) >= 1 && Math.abs(element) <= 3){
                                continue;
                            } else {
                                continue loop1;
                            }
                        } else {
                            continue loop1; //the whole line is poisoned
                        }
                    } else { // otherwise, if it isn't flipped, we're good
                        continue;
                    }
                }
                numSafe++;
        }
    console.log(numSafe);
    return numSafe;
}

partTwo();