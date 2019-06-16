function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.show = function() {
    alert(this.age);
    alert(this.name);
}

var person = new Person('tom', 23);
person.show();