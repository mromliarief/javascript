// Fungsi
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result);

// Menggabungkan object kedalam function sebagai parameter
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// Membuat fungsi dengan menambahkan variabel didalamnya
function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${result}`);
}

exponentsFormula(2,2);

// Rest parameter dengan spread operator
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

// Arrow function
// "name" disini dapat berfungsi sebagai function parameter dari
// function "sayName"
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

// Bentuk lain penulisan Arrow Function
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

const perkalian = (a, b) => a * b;
console.log(perkalian(3, 4));










