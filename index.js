
var recipe = {
    crustType: [ "deep dish", "thin crust", "thick crust","hand tossed" ],
    sauceType: ["traditional","marinara" ],
    cheeses: ["mozzarella","guda","feta" ],
    toppings:["pepperoni","sausage","mushrooms","olives","onions"]
}


function menu(){
                    console.log("The Crust options are:   " + recipe.crustType)
                    console.log("The Sauce options are:   " + recipe.sauceType)
                    console.log("The Cheeses options are: " + recipe.cheeses)
                    console.log("The topping options are: " + recipe.toppings)
            return
}


function randomPizza(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function pizzaOven(crust,sauce,cheese,toppings){
  var  pizza = {};
  pizza.crustType = crust;
  pizza.sauceType = sauce;
  pizza.cheeses = cheese;
  pizza.toppings = toppings;
    return pizza
}


console.log(menu())

var order = pizzaOven(recipe.crustType[0],recipe.sauceType[0],recipe.cheeses[0],[recipe.toppings[0],recipe.toppings[1]])

console.log(order)

var order2 = pizzaOven(recipe.crustType[3],recipe.sauceType[1],[recipe.cheeses[0],recipe.cheeses[2]],[recipe.toppings[2],recipe.toppings[4]])

console.log(order2)

var orderRandom1 = pizzaOven(recipe.crustType[randomPizza(0,recipe.crustType.length - 1)],
                            recipe.sauceType[randomPizza(0,recipe.crustType.length - 1)],
                            recipe.cheeses[randomPizza(0,recipe.crustType.length - 1)],
                            recipe.toppings[randomPizza(0,recipe.crustType.length - 1)],
                            recipe.toppings[randomPizza(0,recipe.crustType.length - 1)])

console.log(orderRandom1)
