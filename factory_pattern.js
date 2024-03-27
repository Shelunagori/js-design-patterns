// Define a constructor function for different types of products
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Define a factory function to create different types of products
function ProductFactory() {}


/* Add methods to the factory function to create different types of products.
using the prototype can be more memory-efficient if you have multiple instances of ProductFactory 
as it avoids creating separate copies of the method for each instance. 
*/
ProductFactory.prototype.createProduct = function(type, name, price) {
    switch (type) {
        case 'toy':
            return new Product(name, price);
        case 'electronics':
            return new Product(name, price);
        case 'battery':
            return new Product(name, price);
        case 'clothing' : 
            return new Product(name, price);
        default :
        throw new Error("Invalid product type: " + type);
    }
};

// get all products from the array
function getProduct() {
    console.log(`Product Name : ${this.name} @${this.price}`);
}

//Usage Exmaple
const factory = new ProductFactory();
const products = [];
products.push(factory.createProduct('toy', 'Action Figure', 15.99));
products.push(factory.createProduct('electronics', 'Laptop', 999.99));
products.push(factory.createProduct('clothing', 'T-shirt', 9.99));

// get all products from the array
products.forEach(product => {
    getProduct.call(product);
});
