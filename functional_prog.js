// Functional Programming
// Contoh penulisan gaya imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}`);
}

console.log(newNamesWithExcMark);

// Contoh penulisan gaya deklaratif
const names_1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark_1 = names_1.map((name_1) => `${name_1}`);

console.log(newNamesWithExcMark_1);

// Pure Function
// Nilai Phi dimasukkan kedalam CONST supaya tidak berubah
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log("--- PURE FUNCTION ---");
  console.log(hitungLuasLingkaran(4));

// contoh pure function dengan destructuring object
const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });

// Mengubah nilai/elemen dalam pure function
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

// Bentuk rekursif ( Countdown )
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);

// High order function
const names_2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item_1 = arr[index];
    if(!item_1) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names_2, (name) => `${name}!` );

console.log({
    names_2,
    newNames,
});

// Array map
const newArray = ['Matt', 'Davis', 'Jeffry', 'Thompson'].map((name) => { return `${name}!`});

console.log(newArray);

// Array map untuk memfilter elemen boolean
// Menghilangkan nilai false
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

// Array map untuk memfilter nilai siswa
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  // Callback ( Array Reduce )
  const students_1 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const totalScore = students_1.reduce((acc, students_1) => acc + students_1.score, 0);
  
  console.log(totalScore);

// Array Some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

// Array find
const students_2 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = students_2.find(students_2 => students_2.name === 'James');
  console.log(findJames);

// Array sort
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

// Array every
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// Array for-each
const names_3 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name_3) => {
  console.log(`Hello, ${name_3}!`);
});
