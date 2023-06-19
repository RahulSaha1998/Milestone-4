const phones = [
    {name: 'Oneplus', camera: 32, storage: '32gb', price: 30000, color: 'silver'},
    {name: 'Samsung', camera: 28, storage: '12gb', price: 32000, color: 'silver'},
    {name: 'iphone', camera: 28, storage: '8gb', price: 50000, color: 'silver'},
    {name: 'Xaomi', camera: 28, storage: '12gb', price: 18000, color: 'silver'},
    {name: 'Vivo', camera: 28, storage: '12gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 28, storage: '12gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 28, storage: '12gb', price: 16000, color: 'silver'},

];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i];
        console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);