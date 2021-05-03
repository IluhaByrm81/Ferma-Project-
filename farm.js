const Cow = require('./animals/cow.js');
const Pig = require('./animals/pig.js');
const Rabbit = require('./animals/rabbit.js');
const Sheep = require('./animals/sheep.js');

class Farm {
   constructor() {
     this.barn = {
       grass: 2000,
       acorn: 1000,
       cabbage: 300,
     };
 
     this.dayLimit = {
       grass: 0,
       acorn: 0,
       cabbage: 0,
     };
 
     this.purchase = {
       grass: 0,
       acorn: 0,
       cabbage: 0,
     };
 
     this.cows = []; // 20
     this.pigs = []; // 10
     this.rabbits = []; // 15
     this.sheeps = []; // 12
     this.money = 0;
     this.truffles = 0;
   }
 
   byeAnimal() {
     const probability = Math.floor(Math.random() * 4);
     if (probability === 0) {
       const newCow = new Cow();
       this.cows.push(newCow);
       this.money -= newCow.price;
     }
     if (probability === 1) {
       const newPig = new Pig();
       this.pigs.push(newPig);
       this.money -= newPig.price;
     }
     if (probability === 2) {
       const newRabbit = new Rabbit();
       this.rabbits.push(newRabbit);
       this.money -= newRabbit.price;
     }
     if (probability === 3) {
       const newSheep = new Sheep();
       this.sheeps.push(newSheep);
       this.money -= newSheep.price;
     }
   }
 
   sellAnimal() {
     const probability = Math.floor(Math.random() * 4);
     if (probability === 0) {
       const sellCow = this.cows.pop();
       this.money += sellCow.price;
     }
     if (probability === 1) {
       const sellPig = this.pigs.pop();
       this.money -= sellPig.price;
     }
     if (probability === 2) {
       const sellRabbit = this.rabbits.pop();
       this.money -= sellRabbit.price;
     }
     if (probability === 3) {
       const sellSheep = this.sheeps.pop();
       this.money -= sellSheep.price;
     }
   }
 
   byeGrass() {
     this.barn.grass += 2000;
     this.purchase.grass += 1;
     this.money -= 2000;
   }
 
   byeAcorn() {
     this.barn.acorn += 100;
     this.purchase.acorn += 1;
     this.money -= 500;
   }
 
   byeCabbage() {
     this.barn.cabbage += 150;
     this.purchase.cabbage += 1;
     this.money -= 400;
   }
 
   renewLimit() {
     this.dayLimit.grass = this.cows.length * 5 + this.sheeps.length * 2;
     this.dayLimit.acorn = this.pigs.length;
     this.dayLimit.cabbage = this.rabbits.length * 0.200;
   }
 
   checkLimit() {
     if (this.barn.grass < this.dayLimit.grass) this.byeGrass();
     if (this.barn.acorn < this.dayLimit.acorn) this.byeAcorn();
     if (this.barn.cabbage < this.dayLimit.cabbage) this.byeCabbage();
   }
 }
 console.log(probability);
 module.exports = Farm;
