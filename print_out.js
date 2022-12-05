let x;
x='Welcome to JavaScript!'
console.log(x);

// Struktur Data --> Object
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
console.log("\n");
// Menambahkan key dan value baru dalam object
user.class = "Fighter";

// Mencetak isi Object
console.log("==== SETELAH DITAMBAH PROPERTY (KEY VALUE) BARU ====");
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Class saya ${user.class}`);
console.log(`Saya berasal dari ${user["home world"]}`);
console.log("\n");

// Array
const myArray = ["Cokelat",123,true,"Belajar JS"];
console.log(myArray);

// Menambah elemen
myArray.unshift("Sepeda");
console.log(myArray);

// Menghapus elemen
myArray.splice(1,1); // Berisi pasangan index dan jumlah elemen
console.log(myArray);

// Mencetak array dengan spread operator
console.log(...myArray);
// Fungsi lain dari spread operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

// Mencetak elemen object dengan Spread Operator
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
console.log("\n");

// Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
// Cetak nilai hasil destructuring
console.log("-- DESTRUCTURING OBJECT --") 
console.log(firstName, lastName, age);
console.log("\n");

// Assigning to different local variable names
console.log("-- ASSIGNING TO DIFF. LOCAL VAR NAMES --")
const profiles = {
    fName: "Jim",
    lName: "Derrick",
    ages: 28
}
 
const {fName: localFirstName, lName: localLastName, ages: localAge} = profiles;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

console.log("\n");
// Destructuring Array
const food = ["Nasgor Mawut", "Penyetan Sambel Bakar", "Bebek Purnama", "Kikil Pandegiling"];
 
const [first, second, third, fourth] = food;

console.log("---DESTRUCTURING ARRAY---")
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log("\n");

// Mengambil salah satu elemen array
console.log("---MENGAMBIL SATU ELEMEN ARRAY---")
const [, , , keempat] = food;
console.log(keempat);
console.log("\n");

// Menukar nilai dari variabel pada array
let a = 1;
let b = 2;
console.log("-- TUKAR NILAI ARRAY --"); 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

