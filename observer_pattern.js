// Define a weather station class
class WeatherStation {
    constructor() {
        // initialize an empty array to hold observer
        this.observer = [];
        // initialize the temperature to 0
        this.temperature = 0;
    }

    // Method to add an observer to the list

    addObserver(observer) {
        this.observer.push(observer);
    }

    // method to remove an observer from the list

    removeObserver(observer) {
        this.observer = this.observer.filter(obs => obs !== observer);
    }

    // Method to set the temperature and notify observers

    setTemperature(temperature) {
        this.temperature = temperature;
        this.notifyObservers();
    }

    // Method to notify all observers about the temperature change

    notifyObservers() {
        this.observer.forEach(observer => {
            //Call the update method on each observer
            observer.update(this.temperature);
        });
    }
}

//Define display device class

class DisplayDevice {
    constructor(name) {
        //store the name of the display device
        this.name = name;
    }

    //Method called when the display is updated with temperature
    update(temperature) {
     //Log a message indicating the name of the display and the temperature
     console.log(`${this.name} Display: Temperature is ${temperature}°C`);
    }
}

// Create an instance of the weatherStation class
const weatherStation = new WeatherStation();

//Create two instance of the DisplayDevice class with different names

const displayDevice1 = new DisplayDevice("DisplayDevice 1");
const displayDevice2 = new DisplayDevice("DisplayDevice 2");

// Add both display devices as observers to the weather station
weatherStation.addObserver(displayDevice1);
weatherStation.addObserver(displayDevice2);

// Simulate a change in temperature by setting its temperature
weatherStation.setTemperature(28);
// Simulate another change in temperature by setting its temperature
weatherStation.setTemperature(30);
