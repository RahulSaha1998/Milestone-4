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

const sum = evenOdd('phero');
console.log(sum);