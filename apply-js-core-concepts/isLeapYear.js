function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const year1 = isLeapYear(1938);
console.log(year1);

const year2 = isLeapYear(1960);
console.log(year2);
