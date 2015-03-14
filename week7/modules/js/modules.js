<<<<<<< HEAD
// var basicCarModule = {
//   color: "blue",
//   size: "sedan",
//   price: 0,

//   options: {
//     powerSteering: true,
//     sunroof: true,
//     heatedSeats: false,
//     racingStripes: false
//   },

//   setPrice: function (newPrice) {
//     this.price = newPrice;
//   },

//   setColor: function (newColor) {
//     this.color = newColor;
//   }

// }

// console.log(basicCarModule);

// basicCarModule.setColor("red");

// console.log(basicCarModule);


// Immediately-Invoked Function Expression (IIFE)


var module = (function () {
  // body...
  var color = "blue";

  return {
    a:1,
    getColor: function () {
      return color;
    }
  };

})();

console.log(module.getColor());

//var myModule = module();




=======
// Literal object module

var basicCarModule = {

  color: "blue",
  size: "sedan",

  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leatherSeats: true,
    heatedSeats: true,
    underLighting: false
  },

  setSpoilerOption: function (spoiler) {
    this.options.spoiler = spoiler;
  },

  setColor: function (color) {
    this.color = color;
  },

  setOptions: function (options) {
    this.options = options;
  }
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49


<<<<<<< HEAD


=======
console.log('basicCarModule', basicCarModule);
basicCarModule.setColor("green");
console.log('basicCarModule', basicCarModule);




// IIFE
// Immediately invoked function expression
// For private state


var module = (function () {
  var color = "blue";

  return {
    a: 1,
    getColor: function () {
      return color;
    },
    setColor: function (newColor) {
      color = newColor;
    }
  };

})();

module.setColor("green");
console.log(module.getColor());
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
