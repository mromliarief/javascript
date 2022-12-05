// Konstruksi Map
console.log("-- Konstruksi Map --");
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);
console.log("\n");

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);

// Mendapat nilai berdasar key
console.log(capital.get("London"));

// Membuat kombinasi key value baru
capital.set("New Delhi", "India");

console.log(capital.size);
console.log(capital.get("New Delhi"));

// Set
// Sintaksis
// Set tidak menerima duplikasi nilai
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// menambah nilai kedalam Set
numberSet.add(3);
numberSet.add(10);
numberSet.add(15);

console.log(numberSet);
