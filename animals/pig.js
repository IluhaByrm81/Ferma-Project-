class Pig{
   name = 'Pig'
   price = 10000
 
   eat(myFarm){
     myFarm.barn.acorn -= 1
   }
   findTruffle(myFarm){
 let probability = Math.floor(Math.random()*4)
 if (probability !==0) {
   myFarm.truffles += 1
   myFarm.money += 120 
 }
   }
 }
 
 module.exports = Pig
