// Class Hamburger
function Hamburger(SIZE) {
  this.burgerSize = SIZE;
  this.toppings = [];
}

// Hamburger's static SIZE properties
Hamburger.SIZE_SMALL = {
  price: 50,
  calories: 20,
};
Hamburger.SIZE_MIDDLE = {
  price: 75,
  calories: 30,
};
Hamburger.SIZE_LARGE = {
  price: 100,
  calories: 40,
};

// Hamburger's static TOPPING properties
Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 5,
};
Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10,
};
Hamburger.TOPPING_CHEESE = {
  price: 10,
  calories: 20,
};
Hamburger.TOPPING_SALAD = {
  price: 20,
  calories: 5,
};
Hamburger.TOPPING_SEASONING = {
  price: 15,
  calories: 0,
};

// Hamburger's methods
Hamburger.prototype.addTopping = function (TOPPING_NAME) {
  this.toppings.push(TOPPING_NAME);
};

Hamburger.prototype.getPrice = function () {
  const burgerPrice = this.burgerSize.price;
  const toppingsPrice = this.toppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, 0);
  return burgerPrice + toppingsPrice;
};

Hamburger.prototype.getCalories = function () {
  const burgerCalories = this.burgerSize.calories;
  const toppingsCalories = this.toppings.reduce((sum, topping) => {
    return sum + topping.calories;
  }, 0);
  return burgerCalories + toppingsCalories;
};

// const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_SALAD);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_SEASONING);
// hamburger.getPrice();
// hamburger.getCalories();
