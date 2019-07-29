var DrinkArray:string[];
DrinkArray = ["Cola", "Lemonade", "Beer"]

class Drink {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

var myDrink1 = new Drink(DrinkArray[0])
var myDrink2 = new Drink(DrinkArray[1])
var myDrink3 = new Drink(DrinkArray[2])
console.log(myDrink1);
console.log(myDrink2);
console.log(myDrink3);

var count = 0;

while (count <= 10){
for (var _i = 0; _i < DrinkArray.length; _i++){
    var Drink = DrinkArray[_i];
    console.log(drink);
}
    count++;
}