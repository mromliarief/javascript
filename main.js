const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
myTiger.strength = 50;
console.log(myTiger);

const myWolf = new Wolf();
myWolf.strength = 30;
console.log(myWolf);

const result = fight(myTiger, myWolf);
console.log(result);


// TODO 4
module.exports = {fight,myTiger,myWolf,result};