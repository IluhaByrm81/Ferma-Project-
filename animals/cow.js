class Cow {
   name = 'Cow'
   price = 10000
 
   eat(myFarm) {
     myFarm.barn.grass -= 5
   }
 }
 
 module.exports = Cow
