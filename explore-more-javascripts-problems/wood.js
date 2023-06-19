function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const chairWood = chairQuantity* perChairWood;
    const tableWood = tableQuantity* perTableWood;
    const bedWood = bedQuantity* perBedWood;
    
    const total = chairWood + tableWood + bedWood;
    return total;

}

const totalWood = woodCalculator(0,1,0);
console.log(totalWood);