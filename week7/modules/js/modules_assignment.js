/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food.
      One property must be an array that will hold
      ingredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/



var favoriteFood = {
	name: "pizza",
	crust: "thin",
	sause: true,
	toppings: true,
	cheese: "cheddar",

	ingredients: [],

	addIngredient: function (ingredient) {
		this.ingredients.push(ingredient);
	}

}

var myIngredients = ["cheese", "bread", "sause", "italian sausage", "pepperoni"];

myIngredients.map (function (i) {
	favoriteFood.addIngredient(i);
})

console.log(favoriteFood);

