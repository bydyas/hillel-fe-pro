class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };
  static SIZE_MIDDLE = {
    price: 75,
    calories: 30,
  };
  static SIZE_LARGE = {
    price: 100,
    calories: 40,
  };

  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
  static TOPPING_POTATO = {
    price: 15,
    calories: 10,
  };
  static TOPPING_CHEESE = {
    price: 10,
    calories: 20,
  };
  static TOPPING_SALAD = {
    price: 20,
    calories: 5,
  };
  static TOPPING_SEASONING = {
    price: 15,
    calories: 0,
  };

  constructor(SIZE) {
    this.burgerSize = SIZE;
    this.toppings = [];
  }

  addTopping(TOPPING_NAME) {
    this.toppings.push(TOPPING_NAME);
  }

  getPrice() {
    const burgerPrice = this.burgerSize.price;
    const toppingsPrice = this.toppings.reduce((sum, topping) => {
      return sum + topping.price;
    }, 0);
    return burgerPrice + toppingsPrice;
  }

  getCalories() {
    const burgerCalories = this.burgerSize.calories;
    const toppingsCalories = this.toppings.reduce((sum, topping) => {
      return sum + topping.calories;
    }, 0);
    return burgerCalories + toppingsCalories;
  }
}

// const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_SALAD);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);
// hamburger.addTopping(Hamburger.TOPPING_SEASONING);
// hamburger.getPrice();
// hamburger.getCalories();
