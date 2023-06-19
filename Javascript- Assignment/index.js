/* Problem no - 1
-> This function taking 1 parameter as input and return a valid value after some calculation. */

function mindGame(number){
    if (typeof number !== "number") {
        return "Invalid Input: it must be a number.";
    }
    else{
        let sum = number;
    const multiplyResult = sum * 3;
    const addResult = multiplyResult + 10;
    const divResult = addResult / 2;
    const minusResult = divResult - 5;
    const totalResult = minusResult;
    return totalResult;
    }
}

// const totalResult = mindGame(50);
// console.log(totalResult);







/* Problem - 2
-> This function taking some string as parameter and checking it is odd or even value and return even or odd as output. */

function evenOdd(string) {
    if (typeof string !== "string") {
        return "Invalid Input: it must be a string.";
    }
    else if (string.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

// const sum = evenOdd('phero');
// console.log(sum);






/* Problem - 3
-> This function taking 1 parameter as input and return as it is if it would less than 7 otherwise it will double the sum value. */

function isLGSeven(number) {
    if (typeof number !== "number") {
        return "Invalid Input: it must be a number.";
    }
    else {
        const sum = number - 7;
        if (sum <= 7) {
            return sum;
        }
        else {
            doubleSum = sum * 2;
            return doubleSum;
        }
    }
}

// const totalSum = isLGSeven(6);
// console.log(totalSum);







/* Problem no - 4
-> This function taking an array as parameter and return some minus value as output which is called bad data in an array. */

function findingBadData(age){
    let ageCount = 0;
    for (let i = 0; i <= age.length; i++){
        if(age[i] < 0){
            ageCount++;
        }
    }
    return ageCount;
}

// const ageOfArray = [ -4, -9, -5, -33, -55];
// const totalData = findingBadData(ageOfArray);
// console.log(totalData);







/* problem no - 5
-> This function taking 3 parameter as input and return a valid value after some calculation. */

function gemsToDiamond(frnd1, frnd2, frnd3) {

    let firstFriendGem = frnd1 * 21;
    let secondFriendGem = frnd2 * 32;
    let thirdFriendGem = frnd3 * 43;

    const totalGem = firstFriendGem + secondFriendGem + thirdFriendGem;

    if (totalGem >= 1000 * 2) {
        const minusGem = totalGem - 2000;
        return minusGem;
    }
    else {
        return totalGem;
    }
}

// const gemCount = gemsToDiamond(1, 1, 1);
// console.log(gemCount);