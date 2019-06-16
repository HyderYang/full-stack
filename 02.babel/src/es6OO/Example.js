class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    };

    show() {
        alert(this.name);
        alert(this.age);
    }
}

const person = new Person('tom', 19);
person.show();