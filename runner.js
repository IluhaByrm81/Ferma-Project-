const Cow = require("./animals/cow.js");
const Pig = require("./animals/pig.js");
const Rabbit = require("./animals/rabbit.js");
const Sheep = require("./animals/sheep.js");
const Farm = require("./farm.js");
const reportsBlock = document.getElementById("reports");

const farm = new Farm();
// Заполняем ферму
for (let i = 0; i < 20; i += 1) {
  farm.cows.push(new Cow());
}
for (let i = 0; i < 10; i += 1) {
  farm.pigs.push(new Pig());
}
for (let i = 0; i < 15; i += 1) {
  farm.rabbits.push(new Rabbit());
}
for (let i = 0; i < 12; i += 1) {
  farm.sheeps.push(new Sheep());
}

const mounths = [
  { mounth: "Январь", day: 31 },
  { mounth: "Февраль", day: 59 },
  { mounth: "Март", day: 90 },
  { mounth: "Апрель", day: 120 },
  { mounth: "Май", day: 151 },
  { mounth: "Июнь", day: 181 },
  { mounth: "Июль", day: 212 },
  { mounth: "Август", day: 243 },
  { mounth: "Сентябрь", day: 273 },
  { mounth: "Оклябрь", day: 304 },
  { mounth: "Ноябрь", day: 334 },
  { mounth: "Декабрь", day: 365 },
];

const years = 10;
let yearsCounter = 0;

while (yearsCounter < years) {
  // Запускаем цикл, иимитирующий год, выдающий ежемесячные отчеты
  for (let i = 1; i < 366; i += 1) {
    if (i % 15 === 0) farm.byeAnimal();
    if (i % 30 === 0) farm.sellAnimal();
    farm.renewLimit();
    farm.checkLimit();
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

    mounths.forEach((mounth) => {
      if (mounth.day === i) {
        const report = document.createElement("div");
        report.innerText = `\n
        Год - ${yearsCounter + 1}, \n
        Месяц - ${mounth.mounth}, \n
        Коров - ${farm.cows.length}, \n
        Свиней - ${farm.pigs.length}, \n
        Кроликов - ${farm.rabbits.length}, \n
        Овец - ${farm.sheeps.length}, \n\n
        Найдено трюфелей - ${farm.truffles}, \n
        Денег на ферме - ${farm.money} руб., \n\n
        Запасы травы - ${farm.barn.grass}, \n
        Запасы желудей - ${farm.barn.acorn}, \n
        Запасы капусты - ${farm.barn.cabbage.toFixed(1)}, \n\n
        Закупки травы с начала работы - ${farm.purchase.grass} шт. , \n
        Закупки желудей с начала работы - ${farm.purchase.acorn} шт., \n
        Закупки капусты с начала работы - ${farm.purchase.cabbage} шт., \n
        ==================================\n`;
        reportsBlock.appendChild(report);
      }
    });
    if (i === 365) yearsCounter += 1;
  }
}
