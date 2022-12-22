/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    let minDiff = Infinity;
    let sortie = arr.sort((a, b) => a - b);
    
    for(let i = 0; i < sortie.length - 1; i++) {
        let currLow = sortie[i];
        let currHigh = sortie[i + 1];
        let tempDiff = Math.abs(currLow - currHigh);
        if(tempDiff < minDiff) {
            minDiff = tempDiff
        }
    }
    
    console.log(minDiff);
    return minDiff;
}
