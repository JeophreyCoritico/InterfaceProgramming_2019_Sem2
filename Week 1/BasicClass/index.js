var DrinkArray;
DrinkArray = ["Cola", "Lemonade", "Beer"];
var Drink = /** @class */ (function () {
    function Drink(name) {
        this.name = name;
    }
    return Drink;
}());
var myDrink1 = new Drink(DrinkArray[0]);
var myDrink2 = new Drink(DrinkArray[1]);
var myDrink3 = new Drink(DrinkArray[2]);
console.log(myDrink1);
console.log(myDrink2);
console.log(myDrink3);
var count = 0;
while (count <= 10) {
    DrinkArray.forEach(function (name) { name = name.substring(0, 2); });
    for (var i = 0; i < DrinkArray.length; i++) {
        console.log(DrinkArray[i]);
    }
    count++;
}
