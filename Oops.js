class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    introduce() {
        console.log(
            `Hi, I'm ${this.name}, ${this.age} years old, and I identify as ${this
        .gender}.`
        );
    }
}

const test = new Person("John Doe", 25, "male");

test.sayHello();
test.introduce();

//Uber Calculate

class UberCalculator {
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }

    calculatePrice() {
        const baseFare = 2.5;
        const costPerMile = 1.5;
        const costPerMinute = 0.2;

        const price =
            baseFare + costPerMile * this.distance + costPerMinute * this.duration;

        return price.toFixed(2);
    }
}

const distance = 10;
const duration = 20;

const calculator = new UberCalculator(distance, duration);
const price = calculator.calculatePrice();

console.log(`The estimated Uber price is $${price}`);