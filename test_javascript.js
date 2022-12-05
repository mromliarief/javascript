console.log("Hello World!");

// Contoh Input user
/*const prompt = require('prompt-sync')();
var fname = prompt('Enter first name : ');
var lname = prompt('Enter your last name : ');
console.log('Your full name is',fname,lname);
*/

// Mengidentifikasi keidentikan sebuah value dan tipe datanya
let a = 10;
let b = 10;

console.log(a === b);
console.log(a !== b);

// Pengkondisian IF ELSE
// null menghasilkan nilai FALSE
// let name = null;
let name = "Erik Ten Hag";
if(name){
    console.log(`Hello, ${name}`); // Contoh concatenate dgn variable
}else{
    console.log("Nama masih kosong!");
}

// Switch Case
let language = "Javanese";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Sugeng Enjing!";
}

console.log(greeting);

// Looping for mundur
console.log("== Looping Mundur ==")
for(let i=5; i>=0; i--){
    console.log("Perulangan ke-",i);
}

// Looping for maju
console.log("== Looping Maju ==")
for(let i=0; i<=5; i++){
    console.log("Perulangan ke-",i);
}

// For of Loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

// Perulangan While
let i = 1;
console.log("== Menggunakan While ==")
while (i <= 5) {
    console.log(i);
    i++;
}

// Perulangan Do-While
let x = 1;
console.log("== Menggunakan Do While ==")
do {
    console.log(x);
    x++;
} while (x <= 5);