function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 59;
const assignment3Marks = 45;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My Average Marks:', myAverage);