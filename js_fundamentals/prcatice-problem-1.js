
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['apple', 'banana', 'orange'];

//index of banana
var index = fruits.indexOf('banana');
console.log(index);

//replace banana with mango
fruits[1]=['mango'];
console.log(fruits);

//remove orange
fruits.pop();
console.log(fruits);

//add watermelon
fruits.push('watermelon');
console.log(fruits);