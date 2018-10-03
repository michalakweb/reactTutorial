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

const me = new Person('Grong', 24);

console.log(me.getGreeting());

console.log(me.getDescription());

const rand = new Person();

console.log(rand);