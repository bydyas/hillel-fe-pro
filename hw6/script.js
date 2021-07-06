const items = [
    {
      title: "IPhone 12",
      quantity: 2,
      price: 1000,
    },
    {
      title: "Magic Mouse",
      quantity: 3,
      price: 100,
    },
    {
      title: "MI Band 6",
      quantity: 4,
      price: 50,
    },
    {
      title: "Monitor ASUS",
      quantity: 1,
      price: 700,
    },
    {
      title: "USB Flash Drive",
      quantity: 5,
      price: 20,
    },
];
  
function totalAmount(producs) {
    let total = 0;
    for (let i = 0; i < producs.length; i++) {
        total += producs[i].price * producs[i].quantity;
    }
    return console.log(`Общая стоимость вашего заказа: ${total}$`);
}
totalAmount(items);

function averagePriceOfOneProduc(producs) {
    let averagePrice = 0,
        total = 0;
    for (let i = 0; i < producs.length; i++) {
        total += producs[i].price;
        averagePrice = total / producs.length;
    }
    return console.log(`Средняя цена 1 товара из всего заказа: ${averagePrice}$`);
}
averagePriceOfOneProduc(items);

function printSorted(producs) {
    for (let i = 0; i < producs.length; i++) {
        for (let j = 0; j < producs.length; j++) {
            if (producs[i].price < producs[j].price) {
                let swap = producs[i];
                producs[i] = producs[j];
                producs[j] = swap;
            }
        }
    }
    return console.log(producs);
}
printSorted(items);