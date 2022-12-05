// Membuat promise
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        // Dipanggil ketika eksekusi Promise berjalan
        resolve("Kopi berhasil dibuat");
    } else {
        // Dipanggil ketika eksekusi Promise gagal dijalankan
        reject("Mesin kopi tidak bisa digunakan");
    }
}

// Kondisi promise sebelum dijalankan adalah pending, jika ber-
// hasil berubah menjadi success/fulfilled, jika gagal menjadi rejected.
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);

// Contoh Consuming Promise (Memanfaatkan Promise)
const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
 
//checkStock().then(handleSuccess, handleFailure);

// Bentuk penulisan lain menggunakan '.catch()
checkStock()
  .then(handleSuccess)
  .catch(handleFailure);