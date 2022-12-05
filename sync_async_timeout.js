
// Contoh 1
/*console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");*/

// Contoh 2
/*const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
*/
 
//const coffee = orderCoffee();
//console.log(coffee);

// Callback
const orderCoffee_1 = callback => {
    let coffee_1 = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee_1 = "Kopi sudah jadi!";
        callback(coffee_1);
    }, 3000);
}

orderCoffee_1(coffee_1 => {
    console.log(coffee_1);
});

