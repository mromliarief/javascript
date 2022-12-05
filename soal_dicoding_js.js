const restaurant = {
    "name" : "JJ Resto",
    "city" : "Jakarta",
    "favorite drink" : "Ice Tea",
    "favorite food" : "Ketoprak",
    isVegan : false
  }
  const name = restaurant.name;
  const favoriteDrink = restaurant['favorite drink'];
  console.log(restaurant);
  console.log(name);
  console.log(favoriteDrink);
  /**
   * Jangan hapus kode di bawah ini
   */
 // module.exports = { restaurant, name, favoriteDrink };
// Mencetak nilai genap dan memasukkan ke dalam array
const evenNumber = [];
for(let i=1; i<=100; i++){
  if(i%2==0){
    evenNumber.push(i);
  }
}
console.log(evenNumber);

// Mencetak dan mengalikan nilai didalam Map
const priceInJPY = 5000;
const currency = new Map([
  ["USD",14000],
  ["JPY",131],
  ["SGD",11000],
  ["MYR",3500]
])
// Mengambil nilai dalam Map dengan 'get'
let priceInIDR = (currency.get("JPY")*priceInJPY);
console.log(priceInIDR);

// OOP
class Animal{
  constructor(name,age,isMamal){
    this.name = name;
    this.age = age;
    this.isMammal = true;
  }
  callAnimal(name,age,isMammal){
    console.log(`${this.name} is ${this.age} years and it is ${this.isMammal}`)
  }
}

class Rabbit extends Animal{
  constructor(name,age,isMammal){
    super();
    this.name = name;
    this.age = age;
    this.isMammal = true;
    }
  eat(name){
      return `${this.name} sedang makan!`;
  }
  ages(age){
    return `Umur = ${this.age}`;
  }
}
class Eagle extends Animal{
  constructor(name,age,isMammal){
    super();
    this.name = name;
    this.age = age;
    this.isMammal = false;
    }
  fly(name){
      return `${this.name} sedang terbang!`;
  }
  ages(age){
    return `Umur = ${this.age}`;
  }
}

const myRabbit = new Rabbit('Labi',2,'isMammal');
console.log(myRabbit.eat());
console.log(myRabbit.ages());
console.log(myRabbit.isMammal);

const myEagle = new Eagle('Elo',4,'isMammal');
console.log(myEagle.fly());
console.log(myEagle.ages());
console.log(myEagle.isMammal);

// Mapping Array
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];
// Cetak nilai setiap elemen
const greatAuthors = books.filter((book)=>book.sales>1000000).map((book)=>{
  return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;});
  console.log(greatAuthors);

// Try catch
// TODO 1
// TODO 1
class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}
// TODO 2
try{
function validateNumberInput(a,b,c){
  if(typeof(a) != 'number'){
    throw new ValidationError('Argumen pertama harus number');
  }else if(typeof(b) != 'number'){
    throw new ValidationError('Argumen kedua harus number');
  }else if(typeof(c) != 'number'){
    throw new ValidationError('Argumen ketiga harus number');
  }
}
}catch(error){
console.log(`${error.message}`);
}

const detectTriangle = (a, b, c) => {
// TODO 3
try{
validateNumberInput(a,b,c);
} catch(error){
return error.message;
}
if (a === b && b === c) {
  return 'Segitiga sama sisi';
}

if (a === b || a === c || b === c) {
  return 'Segitiga sama kaki';
}
return 'Segitiga sembarang';
}
console.log(detectTriangle(3,3,4));
/**
* Jangan hapus kode di bawah ini
*/
module.exports = { ValidationError, validateNumberInput, detectTriangle };

