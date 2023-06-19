var shoppingCart = {
    books: 3,
    sunglass: 1,
    mouse: 1,
    keyboard: 5,
    pen: 3
}

//known value get from use dot notation
var penCount = shoppingCart.pen;

//2nd alternative to get value
//array style
var penCount2 = shoppingCart['pen'];

//3rd alternative to get value
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName,propertyValue);




var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

//set shopping cart values
//1st way to set value
shoppingCart.mouse = 15;
console.log(shoppingCart);

//2nd way to set value
shoppingCart['mouse']=30;
console.log(shoppingCart);

//3rd way to set value
shoppingCart[propertyName] = 89
console.log(shoppingCart);