function getSumOfAnArray(numbers){
    let sum = 0;
    for (var i=0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 32, 45, 91];
getSumOfAnArray(myNumbers);