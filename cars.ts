//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other optional properties
}

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    let car: Car = { manufacturer, model };

    // Process optional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const myCar: Car = createCar("Toyota", "Camry", "color", "blue", "year", 2022, "features", ["GPS", "Bluetooth"]);

// Print the created car object
console.log(myCar);