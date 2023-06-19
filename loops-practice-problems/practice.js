// 1. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

/* var macLaptop = 80000;
var gamingLaptop = 60000;
var lenovoYoga = 40000;
var oldLaptop = 20000;
var myMoney = 10000;

if( myMoney > macLaptop){
    console.log('Vai ajke ami apple er laptop kinbo!');
}
else if (myMoney > gamingLaptop){
    console.log('Gaming laptop kinbo!');
}
else if (myMoney > lenovoYoga){
    console.log('Lenovo laptop kinbo!');
}
else if (myMoney > oldLaptop){
    console.log('Old laptop kinbo!');
}
else{
    console.log('Mobile diye kaj chalaite hbe re vai!');
} */


// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 


//while Loop
/* var monValoNei = 1;
while(monValoNei <= 39){
    console.log(monValoNei);
    console.log('Ajke amar mon valo nei');
    monValoNei++;
} */

//For loop
/* for(i = 1; i <=39; i++){
    console.log(i);
    console.log('ajke amar mon valo nei');
} */


// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও

/* var number = 412;
while(number <= 456){
console.log(number);
number+=2;
} */

// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

/* var number = 581;
while(number <= 623){
    console.log(number);
    number+=2;
} */




// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
/* for (var i = 30; i <= 86; i++) {
    console.log(i)
    if (i > 43) {
        break
    }
} */


// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

/* var bookPrice = ['23', '2321', '242', '123', '342', '113'];
for(i=0; i<bookPrice.length; i++){
    var price = bookPrice[i];
    if(price >200){
        continue;
    }
    console.log(price);
} */

