/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
<<<<<<< HEAD
      that describe your favorite food.
      One property must be an array that will hold
=======
      that describe your favorite food. One
      property must be an array that will hold
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
      ingredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/



var favoriteFood = {
<<<<<<< HEAD
	name: "pizza",
	crust: "thin",
	sause: true,
	toppings: true,
	cheese: "cheddar",

	ingredients: [],

	addIngredient: function (ingredient) {
		this.ingredients.push(ingredient);
	}
=======
  name: "lasagna",
  layers: 5,
  spicy: true,
  size: "xxx-large",
  temperature: "hot",
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49

  ingredients: [],

  addIngredient: function (ingredient) {
    this.ingredients.push(ingredient);
  }
}

<<<<<<< HEAD
var myIngredients = ["cheese", "bread", "sause", "italian sausage", "pepperoni"];

myIngredients.map (function (i) {
	favoriteFood.addIngredient(i);
})

console.log(favoriteFood);

=======
var myIngredients = ["pasta", "tomatoes", "ricotta", "parmesan"]

myIngredients.map(function (ingredient) {
  favoriteFood.addIngredient(ingredient);
});

console.log(favoriteFood);
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
