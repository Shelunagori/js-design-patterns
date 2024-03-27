//Singleton using a module

const Singleton = (function() {
    //Private variables to hold the instance
    let instance;

    // Private function to create the instance
    function createInstance() {
        //Some  initialization logic
        const object = new Object(" I am the Singleton instance");
        return object;
    }

    return {
        // Public method to get the instance
        getInstance : function() {
            // If instance doesn't exist, create a new instance
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

//Usage example

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output will be true, as both instances are the same
