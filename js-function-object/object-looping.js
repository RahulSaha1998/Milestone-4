var shoppingCart = {
    books: 3,
    sunglass: 1,
    mouse: 1,
    keyboard: 5,
    pen: 3,
    shoes: 5,
    
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

//var keys = [ 'books', 'sunglass', 'mouse', 'keyboard', 'pen', 'shoes' ]
/* for(var i = 0; i < keys.length; i++){
    var propertyName =keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);

} */

//for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}