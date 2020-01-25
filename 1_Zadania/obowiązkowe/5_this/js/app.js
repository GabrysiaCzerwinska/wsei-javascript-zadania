// Exercise 1

console.log('5.1');

let car = {
    brand: 'Honda',
    color: 'Silver',
    numberOfKilometers: 0,
    printCarinfo: function() {
        console.log(`${ this.color } ${ this.brand }, ${ this.numberOfKilometers }km`);
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
};

car.printCarinfo();
car.drive(20);
car.printCarinfo();

// Exercise 2

console.log('5.2');

car.services = ['11/01/2020'];

car.addService = function(date) {
    this.services.push(date);
};

car.returnServices = function() {
    return this.services;
};

console.log(car.returnServices());

car.addService('14/01/2020');

console.log(car.returnServices());

// Exercise 3

console.log('5.3');

let stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();