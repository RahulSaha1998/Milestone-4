const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

//remove elements from array
// const partial = friends.splice(2, 5);

//remove elements from array and add new value in the removed position
const partial = friends.splice(2, 5, 101, 102, 103);
console.log(partial);
console.log(friends);