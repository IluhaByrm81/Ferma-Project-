class Sheep{
   name = 'Sheep'
   price = 8000
 
   eat(myFarm){
     myFarm.barn.grass -= 2
   }
 }
  module.exports = Sheep
