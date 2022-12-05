// Lexical function adalah fungsi yang berada
// di dalam fungsi
function init() {
    var name = 'James';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan 
        // di parent function
    }

    greet();
}

init();

// Membuat fungsi dan variabel menjadi private dengan Closure
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

// Cek fungsi dengan return

function minimal(a,b){
    if(a<b){
      return a;
    }else if(a>b){
      return b;
    }else if(a==b){
      return a;
    }else{
      console.log("Masukkan Salah");
    }
}

function power(a,b){
  return a**b;
}

console.log(minimal(3,5));
console.log(power(2,2));

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(2));