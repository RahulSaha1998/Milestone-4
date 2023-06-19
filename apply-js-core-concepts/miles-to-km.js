function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const distance = 2;
const distanceInKm = milesToKilometer(distance);
console.log(distanceInKm);