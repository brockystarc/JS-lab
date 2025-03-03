class Car {
    constructor(make, year, price, engine) {
        this.make = make;
        this.year = year;
        this.price = price;
        this.engine = engine;
    }

    carInfo() {
        console.log(this);
        return `${this.year}, ${this.make}, ${this.price}, ${v6turbo}`;
    }
};

class Engine extends Car {
    constructor(prop1, prop2, prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }
};

let v6turbo = new Engine('prop1', 'prop2', 'prop3');
let myCar = new Car('Nissan', 'GT-R', 2015, v6turbo);