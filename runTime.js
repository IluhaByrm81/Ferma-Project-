class Time {
   day() {
     farm.cows.forEach((cow) => {
       cow.eat(farm);
     });
     farm.sheeps.forEach((sheep) => {
       sheep.eat(farm);
     });
     farm.pigs.forEach((pig) => {
       pig.eat(farm);
       pig.findTruffle(farm);
     });
     farm.rabbits.forEach((rabbit) => {
       rabbit.eat(farm);
     });
   }
 
   every15(farm) {
     farm.byeAnimal();
   }
 
   every30(farm) {
     farm.sellAnimal();
   }
 }
 
 module.exports = Time;
