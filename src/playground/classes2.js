class Person {
    constructor(name = "Blop", age = "unknown") {
        this.name = name;
        this.age = age;
    }
    //Methods
    getGreeting() {
        // return "Hi there " + this.name + ".";
        return `Hi there ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasLocation()) {
            greeting += ` I am from ${this.location}`;
        }

        return greeting;

    }
}

const me = new Traveler('Grong', 24, 'Polska');

console.log(me.getGreeting());

const rand = new Traveler();

console.log(rand.getGreeting());