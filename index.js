import _ from 'lodash';

const myArray_new = [1, 2, 3, 4];
let sum_new = 0;
 
for(let i = 0; i < myArray_new.length; i++) {
    sum_new += myArray_new[i];
}
 
console.log(sum_new);

const myArray_1 = [1, 2, 3, 4];
let sum = myArray_1.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);