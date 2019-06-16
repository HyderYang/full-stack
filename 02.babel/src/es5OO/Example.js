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

// --------------------------------------

// 继承
function Worker(name, age, job){
    Person.call(this, name, age);
    this.job = job;
}

Worker.prototype = new Person();
Worker.prototype.constructor = Worker;
Worker.prototype.doWork = function() {
    alert(this.job);
}

var worker = new Worker('tom', 12,'哈哈');
worker.doWork();
