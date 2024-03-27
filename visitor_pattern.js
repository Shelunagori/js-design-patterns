class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    accept(visitor) {
        visitor.visitBook(this);
    }
}

class Fruit {
    constructor(name, pricePerKg, weight) {
        this.name = name;
        this.pricePerKg = pricePerKg;
        this.weight = weight;
    }

    accept(visitor) {
        visitor.visitFruit(this);
    }
}

class PriceCalculator {
    constructor() {
        this.totalPrice = 0;
    }
    visitBook(book) {
        this.totalPrice += book.price;
    }

    visitFruit(fruit) {
        this.totalPrice += fruit.pricePerKg * fruit.weight;
    }

    getTotalPrice() {
        return this.totalPrice.toFixed(2);
    }
}

const items = [
    new Book('The Great Gatsby', 15.99),
    new Fruit('Apple', 2.99, 2),
    new Fruit('Orange', 7.77, 1.5)
];



const priceCalculator = new PriceCalculator();

items.forEach(item => {
    item.accept(priceCalculator);
});

console.log(`Total price of all items : ${priceCalculator.getTotalPrice()}`);
